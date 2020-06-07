This is a fork of of tone.js that allows more advanced Sampler techniques. 

This includes:
1. Sampler now returns the underlying BufferSource on sampler.triggerAttack/sampler.triggerAttackRelease--- this exposes the detune parameter which is necessary to implement pitch envelopes/pitch modulationn
2. Sampler.triggerAttack/Sampler.triggerAttackRelease now accepts startTime-- this opens up a whole range of possibilities
3. Sampler.loop can be set to true/false, letting you loop a sampler based on loopStart and loopEnd.
4. BufferSource stop now accepts an optional fadeOut parameter, in case you want to manually trigger a release with a fadeOut time other than the original one you specified
