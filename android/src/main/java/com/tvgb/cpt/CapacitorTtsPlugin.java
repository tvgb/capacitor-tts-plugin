package com.tvgb.cpt;

import android.content.Context;
import android.speech.tts.TextToSpeech;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.w3c.dom.Text;

import java.util.UUID;

@NativePlugin
public class CapacitorTtsPlugin extends Plugin implements TextToSpeech.OnInitListener {

    TextToSpeech speaker;

    @Override
    public void onInit(int status) {
        this.speaker = new TextToSpeech(getPluginHandle().getInstance().getContext(), this);
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = "Hello World!";
        String utteranceId = UUID.randomUUID().toString();
        this.speaker.speak(text, TextToSpeech.QUEUE_FLUSH, null, utteranceId);
        call.success();
    }

    @PluginMethod
    public void stopSpeaking(PluginCall call) {
        if (this.speaker.isSpeaking()) {
            this.speaker.stop();
        }

        call.success();
    }
}
