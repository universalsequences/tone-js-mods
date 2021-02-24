define(["../core/Tone"], function(Tone){
    if (Tone.supported){
	if (!Tone.OscillatorNode.prototype.setPeriodicWave){
	    Tone.OscillatorNode.prototype.setPeriodicWave = Tone.OscillatorNode.prototype.setWaveTable;
	}
	if (!AudioContext.prototype.createPeriodicWave){
	    AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
	}
    }
});
