package com.tvgb.cpt;

import android.speech.tts.TextToSpeech;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.Locale;
import java.util.UUID;

@CapacitorPlugin(
	name = "CapacitorTts"
)
public class CapacitorTtsPlugin extends Plugin {

    TextToSpeech speaker;
    private final String TAG = "TTS";

    @Override
    public void load() {
        this.speaker = new TextToSpeech(getPluginHandle().getInstance().getContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status != TextToSpeech.ERROR) {
                    speaker.setLanguage(Locale.UK);
                }
            }
        });
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "");
        Locale locale = new Locale(call.getString("locale", "en-GB"));
        boolean cancel = call.getBoolean("cancel", true);
        float rate = call.getFloat("rate", 1.0f);
        String utteranceId = UUID.randomUUID().toString();

        if (this.speaker.isLanguageAvailable(locale) == TextToSpeech.LANG_MISSING_DATA
                || this.speaker.isLanguageAvailable(locale) == TextToSpeech.LANG_NOT_SUPPORTED) {
            call.reject("Invalid locale: " + locale.toString());
            return;
        } else {
            this.speaker.setLanguage(locale);
        }

        if (text.length() > this.speaker.getMaxSpeechInputLength()) {
            call.reject("Text is too long.");
            return;
        }

        if (this.speaker.setSpeechRate(rate) == TextToSpeech.ERROR) {
            call.reject("Invalid rate: " + rate);
        };

        int speakRes;

        if (cancel) {
            speakRes = this.speaker.speak(text, TextToSpeech.QUEUE_FLUSH, null, utteranceId);
        } else {
            speakRes = this.speaker.speak(text, TextToSpeech.QUEUE_ADD, null, utteranceId);
        }

        if (speakRes == TextToSpeech.ERROR) {
            call.reject("Could not speak text. Something went wrong");
            return;
        }

        call.resolve();
    }

    @PluginMethod
    public void stopSpeaking(PluginCall call) {
        if (this.speaker.isSpeaking()) {
            if (this.speaker.stop() == TextToSpeech.ERROR) {
                call.reject("Could not stop speaking.");
                return;
            };
        }

        call.resolve();
    }
}
