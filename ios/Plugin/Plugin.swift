import Foundation
import Capacitor
import Contacts
import AVFoundation
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TtsPlugin)
public class TtsPlugin: CAPPlugin {
    
    let synthesizer = AVSpeechSynthesizer()
    
    @objc func speak(_ call: CAPPluginCall) {
        let speakText = call.getString("text") ?? ""
		let locale = call.getString("locale") ?? "en-GB"
		let cancel = call.getBool("cancel") ?? true
		let rate = call.getNumber("rate") ?? -1
        let utterance = AVSpeechUtterance(string: speakText)

        utterance.voice = AVSpeechSynthesisVoice(language: locale)

		if rate > 0 {
	        utterance.rate = rate
		}
       
        if synthesizer.isSpeaking && cancel {
            synthesizer.stopSpeaking(at: AVSpeechBoundary.immediate)
        }

        synthesizer.speak(utterance)
        
        call.success();
    }
}
