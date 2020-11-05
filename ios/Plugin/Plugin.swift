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
        let speakText = call.getString("speakText") ?? ""
        let utterance = AVSpeechUtterance(string: speakText)
        utterance.voice = AVSpeechSynthesisVoice(language: "nb-NO")
        //utterance.rate = 1.0
                
        if synthesizer.isSpeaking {
            synthesizer.stopSpeaking(at: AVSpeechBoundary.immediate)
        }
        synthesizer.speak(utterance)
        
        call.success(["res": "Things have been said"]);
    }
}
