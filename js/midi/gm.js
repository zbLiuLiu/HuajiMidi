/*
	----------------------------------------------------------
	GeneralMIDI
	----------------------------------------------------------
*/

(function(root) { 'use strict';

	root.GM = (function(arr) {
		var clean = function(name) {
			return name.replace(/[^a-z0-9 ]/gi, '').replace(/[ ]/g, '_').toLowerCase();
		};
		var res = {
			byName: { },
			byId: { },
			byCategory: { }
		};
		for (var key in arr) {
			var list = arr[key];
			for (var n = 0, length = list.length; n < length; n++) {
				var instrument = list[n];
				if (!instrument) continue;
				var num = parseInt(instrument.substr(0, instrument.indexOf(' ')), 10);
				instrument = instrument.replace(num + ' ', '');
				res.byId[--num] = 
				res.byName[clean(instrument)] = 
				res.byCategory[clean(key)] = {
					// id: clean(instrument),
					// instrument: instrument,
					id: clean('Acoustic Grand Piano'),
					instrument: 'Acoustic Grand Piano',
					number: num,
					category: key
				};
			}
		}
		return res;
	})({
		'Piano': ['1 Acoustic Grand Piano', '2 Bright Acoustic Piano', '3 Electric Grand Piano', '4 Honky-tonk Piano', '5 Electric Piano 1', '6 Electric Piano 2', '7 Harpsichord', '8 Clavinet'],
		'Chromatic Percussion': ['9 Celesta', '10 Glockenspiel', '11 Music Box', '12 Vibraphone', '13 Marimba', '14 Xylophone', '15 Tubular Bells', '16 Dulcimer'],
		'Organ': ['17 Drawbar Organ', '18 Percussive Organ', '19 Rock Organ', '20 Church Organ', '21 Reed Organ', '22 Accordion', '23 Harmonica', '24 Tango Accordion'],
		'Guitar': ['25 Acoustic Guitar (nylon)', '26 Acoustic Guitar (steel)', '27 Electric Guitar (jazz)', '28 Electric Guitar (clean)', '29 Electric Guitar (muted)', '30 Overdriven Guitar', '31 Distortion Guitar', '32 Guitar Harmonics'],
		'Bass': ['33 Acoustic Bass', '34 Electric Bass (finger)', '35 Electric Bass (pick)', '36 Fretless Bass', '37 Slap Bass 1', '38 Slap Bass 2', '39 Synth Bass 1', '40 Synth Bass 2'],
		'Strings': ['41 Violin', '42 Viola', '43 Cello', '44 Contrabass', '45 Tremolo Strings', '46 Pizzicato Strings', '47 Orchestral Harp', '48 Timpani'],
		'Ensemble': ['49 String Ensemble 1', '50 String Ensemble 2', '51 Synth Strings 1', '52 Synth Strings 2', '53 Choir Aahs', '54 Voice Oohs', '55 Synth Choir', '56 Orchestra Hit'],
		'Brass': ['57 Trumpet', '58 Trombone', '59 Tuba', '60 Muted Trumpet', '61 French Horn', '62 Brass Section', '63 Synth Brass 1', '64 Synth Brass 2'],
		'Reed': ['65 Soprano Sax', '66 Alto Sax', '67 Tenor Sax', '68 Baritone Sax', '69 Oboe', '70 English Horn', '71 Bassoon', '72 Clarinet'],
		'Pipe': ['73 Piccolo', '74 Flute', '75 Recorder', '76 Pan Flute', '77 Blown Bottle', '78 Shakuhachi', '79 Whistle', '80 Ocarina'],
		'Synth Lead': ['81 Lead 1 (square)', '82 Lead 2 (sawtooth)', '83 Lead 3 (calliope)', '84 Lead 4 (chiff)', '85 Lead 5 (charang)', '86 Lead 6 (voice)', '87 Lead 7 (fifths)', '88 Lead 8 (bass + lead)'],
		'Synth Pad': ['89 Pad 1 (new age)', '90 Pad 2 (warm)', '91 Pad 3 (polysynth)', '92 Pad 4 (choir)', '93 Pad 5 (bowed)', '94 Pad 6 (metallic)', '95 Pad 7 (halo)', '96 Pad 8 (sweep)'],
		'Synth Effects': ['97 FX 1 (rain)', '98 FX 2 (soundtrack)', '99 FX 3 (crystal)', '100 FX 4 (atmosphere)', '101 FX 5 (brightness)', '102 FX 6 (goblins)', '103 FX 7 (echoes)', '104 FX 8 (sci-fi)'],
		'Ethnic': ['105 Sitar', '106 Banjo', '107 Shamisen', '108 Koto', '109 Kalimba', '110 Bagpipe', '111 Fiddle', '112 Shanai'],
		'Percussive': ['113 Tinkle Bell', '114 Agogo', '115 Steel Drums', '116 Woodblock', '117 Taiko Drum', '118 Melodic Tom', '119 Synth Drum'],
		'Sound effects': ['120 Reverse Cymbal', '121 Guitar Fret Noise', '122 Breath Noise', '123 Seashore', '124 Bird Tweet', '125 Telephone Ring', '126 Helicopter', '127 Applause', '128 Gunshot']

		// 'Piano': ['1 Acoustic Grand Piano', '2 Acoustic Grand Piano', '3 Acoustic Grand Piano', '4 Acoustic Grand Piano', '5 Acoustic Grand Piano', '6 Acoustic Grand Piano', '7 Acoustic Grand Piano', '8 Acoustic Grand Piano'],
		// 'Chromatic Percussion': ['9 Acoustic Grand Piano', '10 Acoustic Grand Piano', '11 Acoustic Grand Piano', '12 Acoustic Grand Piano', '13 Acoustic Grand Piano', '14 Acoustic Grand Piano', '15 Acoustic Grand Piano', '16 Acoustic Grand Piano'],
		// 'Organ': ['17 Acoustic Grand Piano', '18 Acoustic Grand Piano', '19 Acoustic Grand Piano', '20 Acoustic Grand Piano', '21 Acoustic Grand Piano', '22 Acoustic Grand Piano', '23 Acoustic Grand Piano', '24 Acoustic Grand Piano'],
		// 'Guitar': ['25 Acoustic Grand Piano', '26 Acoustic Grand Piano', '27 Acoustic Grand Piano', '28 Acoustic Grand Piano', '29 Acoustic Grand Piano', '30 Acoustic Grand Piano', '31 Acoustic Grand Piano', '32 Acoustic Grand Piano'],
		// 'Bass': ['33 Acoustic Grand Piano', '34 Acoustic Grand Piano', '35 Acoustic Grand Piano', '36 Acoustic Grand Piano', '37 Acoustic Grand Piano', '38 Acoustic Grand Piano', '39 Acoustic Grand Piano', '40 Acoustic Grand Piano'],
		// 'Strings': ['41 Acoustic Grand Piano', '42 Acoustic Grand Piano', '43 Acoustic Grand Piano', '44 Acoustic Grand Piano', '45 Acoustic Grand Piano', '46 Acoustic Grand Piano', '47 Acoustic Grand Piano', '48 Acoustic Grand Piano'],
		// 'Ensemble': ['49 Acoustic Grand Piano', '50 Acoustic Grand Piano', '51 Acoustic Grand Piano', '52 Acoustic Grand Piano', '53 Acoustic Grand Piano', '54 Acoustic Grand Piano', '55 Acoustic Grand Piano', '56 Acoustic Grand Piano'],
		// 'Brass': ['57 Acoustic Grand Piano', '58 Acoustic Grand Piano', '59 Acoustic Grand Piano', '60 Acoustic Grand Piano', '61 Acoustic Grand Piano', '62 Acoustic Grand Piano', '63 Acoustic Grand Piano', '64 Acoustic Grand Piano'],
		// 'Reed': ['65 Acoustic Grand Piano', '66 Acoustic Grand Piano', '67 Acoustic Grand Piano', '68 Acoustic Grand Piano', '69 Acoustic Grand Piano', '70 Acoustic Grand Piano', '71 Acoustic Grand Piano', '72 Acoustic Grand Piano'],
		// 'Pipe': ['73 Acoustic Grand Piano', '74 Acoustic Grand Piano', '75 Acoustic Grand Piano', '76 Acoustic Grand Piano', '77 Acoustic Grand Piano', '78 Acoustic Grand Piano', '79 Acoustic Grand Piano', '80 Acoustic Grand Piano'],
		// 'Synth Lead': ['81 Acoustic Grand Piano', '82 Acoustic Grand Piano', '83 Acoustic Grand Piano', '84 Acoustic Grand Piano', '85 Acoustic Grand Piano', '86 Acoustic Grand Piano', '87 Acoustic Grand Piano', '88 Acoustic Grand Piano'],
		// 'Synth Pad': ['89 Acoustic Grand Piano', '90 Acoustic Grand Piano', '91 Acoustic Grand Piano', '92 Acoustic Grand Piano', '93 Acoustic Grand Piano', '94 Acoustic Grand Piano', '95 Acoustic Grand Piano', '96 Acoustic Grand Piano'],
		// 'Synth Effects': ['97 Acoustic Grand Piano', '98 Acoustic Grand Piano', '99 Acoustic Grand Piano', '100 Acoustic Grand Piano', '101 Acoustic Grand Piano', '102 Acoustic Grand Piano', '103 Acoustic Grand Piano', '104 Acoustic Grand Piano'],
		// 'Ethnic': ['105 Acoustic Grand Piano', '106 Acoustic Grand Piano', '107 Acoustic Grand Piano', '108 Acoustic Grand Piano', '109 Acoustic Grand Piano', '110 Acoustic Grand Piano', '111 Acoustic Grand Piano', '112 Acoustic Grand Piano'],
		// 'Percussive': ['113 Acoustic Grand Piano', '114 Acoustic Grand Piano', '115 Acoustic Grand Piano', '116 Acoustic Grand Piano', '117 Acoustic Grand Piano', '118 Acoustic Grand Piano', '119 Acoustic Grand Piano'],
		// 'Sound effects': ['120 Acoustic Grand Piano', '121 Acoustic Grand Piano', '122 Acoustic Grand Piano', '123 Acoustic Grand Piano', '124 Acoustic Grand Piano', '125 Acoustic Grand Piano', '126 Acoustic Grand Piano', '127 Acoustic Grand Piano', '128 Acoustic Grand Piano']
	});

	/* get/setInstrument
	--------------------------------------------------- */
	root.getInstrument = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.instrument;
	};

	root.setInstrument = function(channelId, program, delay) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.instrument = program;
			}, delay);
		} else {
			channel.instrument = program;
		}
	};

	/* get/setMono
	--------------------------------------------------- */
	root.getMono = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.mono;
	};

	root.setMono = function(channelId, truthy, delay) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.mono = truthy;
			}, delay);
		} else {
			channel.mono = truthy;
		}
	};

	/* get/setOmni
	--------------------------------------------------- */
	root.getOmni = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.omni;
	};

	root.setOmni = function(channelId, truthy) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.omni = truthy;	
			}, delay);
		} else {
			channel.omni = truthy;
		}
	};

	/* get/setSolo
	--------------------------------------------------- */
	root.getSolo = function(channelId) {
		var channel = root.channels[channelId];
		return channel && channel.solo;
	};

	root.setSolo = function(channelId, truthy) {
		var channel = root.channels[channelId];
		if (delay) {
			return setTimeout(function() {
				channel.solo = truthy;	
			}, delay);
		} else {
			channel.solo = truthy;
		}
	};

	/* channels
	--------------------------------------------------- */
	root.channels = (function() { // 0 - 15 channels
		var channels = {};
		for (var i = 0; i < 16; i++) {
			channels[i] = { // default values
				instrument: i,
				pitchBend: 0,
				mute: false,
				mono: false,
				omni: false,
				solo: false
			};
		}
		return channels;
	})();

	/* note conversions
	--------------------------------------------------- */
	root.keyToNote = {}; // C8  == 108
	root.noteToKey = {}; // 108 ==  C8

	(function() {
		var A0 = 0x15; // first note
		var C8 = 0x6C; // last note
		var number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
		for (var n = A0; n <= C8; n++) {
			var octave = (n - 12) / 12 >> 0;
			var name = number2key[n % 12] + octave;
			root.keyToNote[name] = n;
			root.noteToKey[n] = name;
		}
	})();

})(MIDI);