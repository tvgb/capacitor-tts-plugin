import Foundation
import Capacitor
import Contacts
import AVFoundation
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorTtsPlugin)
public class CapacitorTtsPlugin: CAPPlugin, SpeakDelegate {

	let synthesizer = AVSpeechSynthesizer()
    let speaker = Speaker()
    var pluginCall: CAPPluginCall? = nil
    
    public override init(bridge: CAPBridge, pluginId: String, pluginName: String) {
        super.init(bridge: bridge, pluginId: pluginId, pluginName: pluginName)
        self.speaker.delegate = self
    }

	@objc func speak(_ call: CAPPluginCall) {
        self.pluginCall = call
		let text = call.getString("text") ?? ""
		let locale = call.getString("locale") ?? "en-GB"
		let cancel = call.getBool("cancel") ?? true
		let rate = call.getFloat("rate") ?? 0.5
		let utterance = AVSpeechUtterance(string: text)
        
        if rate < AVSpeechUtteranceMinimumSpeechRate {
            call.reject("Options \"rate\" can not be lower than \(AVSpeechUtteranceMinimumSpeechRate)." )
            return
            
        } else if rate > AVSpeechUtteranceMaximumSpeechRate {
            call.reject("Options \"rate\" can not be higher than \(AVSpeechUtteranceMaximumSpeechRate)." )
            return
            
        } else {
            utterance.rate = rate
        }
        
        let voice = AVSpeechSynthesisVoice(language: locale)
        
        if voice == nil {
            call.reject("Invalid locale: \(locale)")
            return
        }
        
        utterance.voice = voice
        
        if speaker.isSpeaking && cancel {
            if !speaker.stopSpeaking(at: AVSpeechBoundary.immediate) {
                call.reject("Could not stop current speaking")
                return
            }
        }
        
        speaker.speak(utterance)
	}
    
    @objc func stopSpeaking(_ call: CAPPluginCall) {
        if speaker.isSpeaking {
            if !speaker.stopSpeaking(at: AVSpeechBoundary.immediate) {
                call.reject("Could not stop speaking")
                return
            }
        }
        
        call.success()
    }
    
    func speakDidFinish() {
        self.pluginCall?.success()
    }
}

protocol SpeakDelegate {
    func speakDidFinish()
}

class Speaker: NSObject, AVSpeechSynthesizerDelegate {
    
    let synthesizer = AVSpeechSynthesizer()
    var isSpeaking = false
    var delegate: SpeakDelegate!
    
    override init() {
        super.init()
        self.synthesizer.delegate = self
    }
    
    func speak(_ utterance: AVSpeechUtterance) {
        self.isSpeaking = true
        self.synthesizer.speak(utterance)
    }
    
    func stopSpeaking(at boundry: AVSpeechBoundary) -> Bool {
        return self.synthesizer.stopSpeaking(at: boundry)
    }
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
        self.isSpeaking = false
        self.delegate.speakDidFinish()
    }
}
