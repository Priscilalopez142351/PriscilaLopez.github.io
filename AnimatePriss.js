(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"AnimatePriss_atlas_1", frames: [[637,434,504,263],[0,0,635,701],[637,0,391,432]]}
	];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.CachedBmp_2 = function() {
		this.initialize(ss["AnimatePriss_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_1 = function() {
		this.initialize(ss["AnimatePriss_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.purplestar222222222222222 = function() {
		this.initialize(ss["AnimatePriss_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.CachedBmp_2();
		this.instance.setTransform(0,0,0.4998,0.4998);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,251.9,131.5), null);
	
	
	(lib.sun = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.CachedBmp_1();
		this.instance.setTransform(0,0,0.5,0.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,317.5,350.5);
	
	
	(lib.nube1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol1();
		this.instance.setTransform(125.8,65.6,1,1,0,0,0,125.8,65.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,251.9,131.5);
	
	
	(lib.nube = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// textandaoutsidegraph
		this.instance = new lib.purplestar222222222222222();
		this.instance.setTransform(655.2,-300.7,0.5173,0.4924,0,1.1967,0);
	
		this.text = new cjs.Text("Hello!", "100px 'Broadway'", "#9933FF");
		this.text.lineHeight = 115;
		this.text.lineWidth = 398;
		this.text.parent = this;
		this.text.setTransform(330,-260.55,1,0.8713,0,1.4561,0);
	
		this.text_1 = new cjs.Text("", "100px 'Rockwell-ExtraBold'", "#9933FF");
		this.text_1.lineHeight = 119;
		this.text_1.lineWidth = 100;
		this.text_1.parent = this;
		this.text_1.setTransform(1281.15,-612.65);
	
		this.text_2 = new cjs.Text("Hello!", "bold 100px 'Rockwell Extra Bold'", "#9933FF");
		this.text_2.lineHeight = 119;
		this.text_2.lineWidth = 384;
		this.text_2.parent = this;
		this.text_2.setTransform(180.55,-1433.7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1,p:{font:"100px 'Rockwell-ExtraBold'",color:"#9933FF",lineHeight:119.45}},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text_2},{t:this.text_1,p:{font:"100px 'Broadway'",color:"#000000",lineHeight:115.2}},{t:this.text},{t:this.instance}]},40).to({state:[]},1).wait(2));
	
		// shapetw
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FF00CC").ss(1,1,1).p("AuBoQIckAAIghQhI8kAAg");
		this.shape.setTransform(126.475,-62.925);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FF00CC").s().p("AuiIRIAhwhIckAAIghQhg");
		this.shape_1.setTransform(126.475,-62.925);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#FF00CC").ss(1,1,1).p("AunIFQAMltATlpQAIinAKikQDMgDDKAAQFuAAFrAIQFcAIFTALQgLFwgTFpQgJCmgJCjQjLACjKAAQlvAAlqgIQlcgIlUgLg");
		this.shape_2.setTransform(127.475,-72.5);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FF00CC").s().p("Aj2IYQlcgIlUgLIgBAAQAMltATlpIASlLQDMgCDKAAQFuAAFrAHQFcAJFTALQgLFvgTFpIgSFIQjLACjKAAQlvABlqgIg");
		this.shape_3.setTransform(127.475,-72.5);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#FF00CC").ss(1,1,1).p("AutH4QAMlwAbloQAMimAOiiQDMgFDMAAQFxAAFqAQQFbAQFMAWQgLFygcFoQgMClgOChQjLAFjMAAQlyAAlpgQQlcgQlLgWg");
		this.shape_4.setTransform(128.525,-82.025);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FF00CC").s().p("AkFIeQlcgQlLgWIgBAAQAMlwAbloIAalIQDMgFDMAAQFxAAFqAQQFbAQFMAWQgLFygcFoQgMClgOChQjLAFjMAAQlyAAlpgQg");
		this.shape_5.setTransform(128.525,-82.025);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#FF00CC").ss(1,1,1).p("AuyHsQAMlyAjloQAQimASigQDNgHDNAAQF0AAFpAYQFbAXFCAiQgLF0gkFoQgQCkgRCfQjMAHjNAAQl1AAlogXQlcgYlCghg");
		this.shape_6.setTransform(129.525,-91.6);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FF00CC").s().p("AkTIlQlcgYlCgiIgBAAQAMlyAjlnQAQimASigQDNgHDNAAQF0AAFpAYQFbAXFCAhQgLF1gkFoQgQCkgRCfQjMAHjNAAQl1AAlogXg");
		this.shape_7.setTransform(129.525,-91.6);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#FF00CC").ss(1,1,1).p("Au4HfQAMl0ArlnQAUilAWifQDOgJDOAAQF3AAFoAfQFbAgE6AsQgMF3grFnQgUCkgWCdQjMAJjPAAQl4AAlngfQlbgfk6gtg");
		this.shape_8.setTransform(130.575,-101.175);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FF00CC").s().p("AkiIrQlbgfk6gtIgBAAQAMl0ArlnQAUilAWifQDOgJDOAAQF3AAFoAfQFbAgE6AsQgMF3grFnQgUCkgWCdQjMAJjPAAQl4AAlngfg");
		this.shape_9.setTransform(130.575,-101.175);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("#FF00CC").ss(1,1,1).p("Au9HSQAMl3AzlmQAXikAbidQDOgMDQAAQF6AAFnAoQFaAnExA4QgLF5g0FmQgXCkgbCbQjMAMjRAAQl6AAlngoQlagnkxg3IgBAAg");
		this.shape_10.setTransform(131.575,-110.7);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FF00CC").s().p("AkxIxQlagnkxg4IgBAAIAAAAQAMl3AzlmQAXilAbicQDOgLDQAAQF6gBFnAnQFaAoExA4QgLF5g0FmQgXCkgbCbQjMALjRAAQl6AAlngng");
		this.shape_11.setTransform(131.575,-110.7);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f().s("#FF00CC").ss(1,1,1).p("AvDHGQAMl6A7llQAbikAfiaQDPgPDSAAQF8AAFnAvQFZAwEpBCQgLF8g8FlQgbCkgfCZQjNAOjSAAQl9AAlngvQlZgvkphDg");
		this.shape_12.setTransform(132.6,-120.275);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FF00CC").s().p("AlAI4QlZgvkphDIgBAAQAMl6A8llQAaikAfiaQDPgPDRAAQF9AAFnAvQFZAwEpBCQgLF8g9FlQgbCkgeCZQjNAOjTAAQl8AAlngvg");
		this.shape_13.setTransform(132.6,-120.275);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f().s("#FF00CC").ss(1,1,1).p("AvIG5QAMl8BDlkQAfikAjiZQDPgQDTAAQF/AAFmA3QFZA3EgBNQgLF/hEFlQgfCigjCYQjOAQjTAAQmAAAllg3Qlag3kghOg");
		this.shape_14.setTransform(133.625,-129.825);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FF00CC").s().p("AlOI+Qlag3kghOIAAAAQAMl8BDlkQAfikAjiZQDPgQDTAAQF/AAFmA3QFZA3EgBNQgLF/hEFlQgfCigjCYQjOAQjTAAQmAAAllg3g");
		this.shape_15.setTransform(133.625,-129.825);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#FF00CC").ss(1,1,1).p("AvOGsQAMl+BMlkQAiijAniWQDQgTDUAAQGDAAFkA/QFZA+EYBZQgMGBhMFkQgiCignCWQjPASjVAAQmCAAllg/QlZg/kXhYIgBAAg");
		this.shape_16.setTransform(134.65,-139.375);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FF00CC").s().p("AlcJEQlag/kXhYIgBAAIAAgBQAMl+BMlkQAiijAniWQDQgTDVAAQGCAAFlA/QFZA+EXBZQgMGBhMFkQgiCignCWQjPASjVAAQmCAAlkg/g");
		this.shape_17.setTransform(134.65,-139.375);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f().s("#FF00CC").ss(1,1,1).p("AvUGgQANmBBTljQAmijAsiUQDQgWDWAAQGEAAFlBHQFYBHEPBjQgLGEhVFjQglCigsCTQjPAVjWAAQmFAAlkhGQlZhHkPhkg");
		this.shape_18.setTransform(135.65,-148.95);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FF00CC").s().p("AlrJLQlZhHkOhkIgBAAQAMmBBTljQAnijAriUQDQgVDWgBQGEAAFlBHQFYBHEQBjQgMGFhVFiQglCigsCTQjPAWjWAAQmFgBlkhGg");
		this.shape_19.setTransform(135.65,-148.95);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("#FF00CC").ss(1,1,1).p("AvZGTQAMmDBcljQApiiAwiSQDRgYDXAAQGHAAFkBPQFZBOEGBvQgMGGhcFiQgqCigwCRQjPAYjYAAQmHAAlkhPQlYhPkHhvg");
		this.shape_20.setTransform(136.7,-158.475);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FF00CC").s().p("Al6JRQlYhPkGhvIgBAAQAMmDBcljQAqiiAviSQDSgYDWAAQGHAAFlBPQFXBOEHBvQgMGGhcFiQgqCigwCRQjPAYjYAAQmHAAlkhPg");
		this.shape_21.setTransform(136.7,-158.475);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f().s("#FF00CC").ss(1,1,1).p("AveGHQAMmGBklhQAtiiA0iRQDSgaDZAAQGJAAFkBXQFXBWD+B6QgMGHhkFjQguChg0CQQjQAZjZAAQmKAAljhWQlYhXj9h6IgBAAg");
		this.shape_22.setTransform(137.7,-168.05);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FF00CC").s().p("AmIJYQlYhXj+h6IgBAAIAAAAQANmHBklhQAtiiA0iQQDSgaDZAAQGJAAFjBXQFYBWD+B6QgMGHhlFjQgtChg0CQQjQAZjaAAQmJAAljhWg");
		this.shape_23.setTransform(137.7,-168.05);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f().s("#FF00CC").ss(1,1,1).p("AvkF6QAMmHBsliQAxihA4iPQDSgcDbAAQGMAAFiBeQFYBeD1CFQgMGKhsFiQgxChg5CNQjQAcjcAAQmMAAliheQlYhej1iFIAAAAg");
		this.shape_24.setTransform(138.75,-177.625);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FF00CC").s().p("AmXJeQlXhej2iFIAAAAIAAgBQAMmHBsliQAxihA4iPQDTgcDaAAQGMAAFjBeQFWBeD2CFQgMGKhsFiQgxChg5CNQjQAcjcAAQmMAAliheg");
		this.shape_25.setTransform(138.75,-177.625);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f().s("#FF00CC").ss(1,1,1).p("AvqFuQANmKB0liQA0ihA9iMQDSgfDcAAQGQAAFhBmQFXBnDtCPQgMGNh1FhQg0Chg9CLQjRAfjcAAQmQAAlihnQlXhmjsiQg");
		this.shape_26.setTransform(139.75,-187.15);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FF00CC").s().p("AmmJkQlWhmjtiQIAAAAQAMmLB0lgQA1ihA8iNQDSgfDdABQGPgBFhBmQFXBnDtCPQgMGNh1FhQg1Cgg8CMQjSAejcAAQmPAAlihmg");
		this.shape_27.setTransform(139.75,-187.15);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f().s("#FF00CC").ss(1,1,1).p("AvvFhQAMmNB9lgQA4igBBiLQDTghDdAAQGSAAFhBuQFWBuDkCbQgMGPh9FgQg4CghBCKQjSAhjdAAQmTAAlghuQlXhujjicIgBAAg");
		this.shape_28.setTransform(140.775,-196.725);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#FF00CC").s().p("Am0JrQlXhujjicIgBAAIAAAAQAMmNB9lgQA4igBBiLQDTghDdAAQGSAAFhBuQFWBuDkCbQgMGPh9FgQg4CghBCKQjSAhjdAAQmTAAlghug");
		this.shape_29.setTransform(140.775,-196.725);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f().s("#FF00CC").ss(1,1,1).p("Av1FUQANmPCElfQA8igBFiJQDUgjDeAAQGVAAFhB2QFVB2DcCmQgNGRiEFgQg8CfhGCIQjSAjjfAAQmVAAlgh2QlWh2jbimIgBAAg");
		this.shape_30.setTransform(141.8,-206.275);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#FF00CC").s().p("AnDJxQlWh2jbimIgBAAIAAgBQANmPCFlfQA7igBFiJQDUgjDeAAQGVAAFgB2QFWB2DcCmQgNGRiEFgQg9CfhFCIQjSAjjfAAQmVAAlgh2g");
		this.shape_31.setTransform(141.8,-206.275);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f().s("#FF00CC").ss(1,1,1).p("Av6FIQAMmSCNleQA/igBKiHQDUglDgAAQGYAAFfB9QFVB+DTCxQgMGUiNFfQhACfhJCGQjTAljhAAQmXAAlgh+QlVh9jTiyIAAAAg");
		this.shape_32.setTransform(142.825,-215.825);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#FF00CC").s().p("AnSJ3QlVh9jTiyIAAAAIAAAAQAMmSCNleQA/igBKiHQDUglDgAAQGYAAFfB9QFVB+DTCxQgMGUiNFfQhACfhJCGQjTAljhAAQmXAAlgh+g");
		this.shape_33.setTransform(142.825,-215.825);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f().s("#FF00CC").ss(1,1,1).p("AwAE7QANmUCVleQBDifBNiFQDVgoDiAAQGaAAFfCGQFVCFDKC9QgNGXiUFdQhECfhOCEQjTAojiAAQmbAAleiGQlViFjKi9IgBAAg");
		this.shape_34.setTransform(143.825,-225.4);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#FF00CC").s().p("AngJ+QlViFjKi+IgBAAIAAAAQANmUCVleQBDifBNiEQDVgpDiAAQGaAAFfCGQFVCFDKC9QgNGXiUFdQhECfhOCEQjTAojiAAQmbgBleiFg");
		this.shape_35.setTransform(143.825,-225.4);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f().s("#FF00CC").ss(1,1,1).p("AwFEvQAMmXCdldQBHifBSiDQDVgqDjAAQGeAAFdCOQFVCNDBDHQgNGZicFdQhHCfhSCCQjUAqjkAAQmdAAleiOQlViNjBjIIAAAAg");
		this.shape_36.setTransform(144.875,-234.95);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#FF00CC").s().p("AnvKFQlViOjBjIIAAAAIAAAAQAMmXCdldQBHifBSiDQDVgqDjAAQGeAAFdCNQFVCODBDHQgNGaicFdQhHCehSCCQjUAqjkAAQmdAAleiNg");
		this.shape_37.setTransform(144.875,-234.95);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f().s("#FF00CC").ss(1,1,1).p("AwLEiQANmZClldQBKieBWiBQDWgsDlAAQGgAAFdCVQFUCWC5DSQgNGcilFbQhKCfhXCAQjUAsjlAAQmhAAlciVQlViVi4jTIgBAAg");
		this.shape_38.setTransform(145.875,-244.5);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#FF00CC").s().p("An9KKQlViUi4jUIgBAAIAAAAQANmZCllcQBKifBWiAQDWgtDlAAQGgAAFdCVQFUCVC5DTQgNGcilFbQhKCehXCBQjUAsjlAAQmhAAlciWg");
		this.shape_39.setTransform(145.875,-244.5);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f().s("#FF00CC").ss(1,1,1).p("AwQEWQANmcCslcQBOieBbh+QDWgvDmAAQGjAAFcCdQFUCdCwDeQgNGeitFbQhOCehbB+QjVAvjmAAQmjAAlcieQlUidiwjeIAAAAg");
		this.shape_40.setTransform(146.925,-254.05);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#FF00CC").s().p("AoMKRQlUidiwjeIAAAAIAAAAQANmcCslcQBOieBbh+QDWgvDmgBQGjABFcCdQFUCdCwDeQgNGeitFbQhOCehbB9QjVAvjmAAQmjABlcieg");
		this.shape_41.setTransform(146.925,-254.05);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f().s("#FF00CC").ss(1,1,1).p("AwWEJQANmeC1lbQBSieBfh8QDXgyDnAAQGmAAFbCmQFTCkCoDpQgNGhi1FaQhSCehfB8QjWAxjoAAQmlAAlcilQlTiminjpIgBAAg");
		this.shape_42.setTransform(147.925,-263.625);
	
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#FF00CC").s().p("AobKYQlTiminjpIgBAAIAAAAQANmeC1lbQBSieBfh8QDXgyDnAAQGmAAFbCmQFTCkCoDpQgNGhi1FaQhSCehfB8QjWAxjoAAQmlAAlcilg");
		this.shape_43.setTransform(147.925,-263.625);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f().s("#FF00CC").ss(1,1,1).p("AwbD8QANmgC9laQBVieBjh6QDYg0DpAAQGoAAFbCtQFSCtCfDzQgMGki+FZQhVCdhkB6QjWA0jpAAQmpAAlaitQlTitifj0IAAAAg");
		this.shape_44.setTransform(148.925,-273.175);
	
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#FF00CC").s().p("AopKeQlTitifj0IAAAAIAAgBQANmgC9laQBVieBjh6QDYg0DpAAQGoAAFbCtQFSCtCfDzQgMGki+FZQhVCdhkB6QjWA0jpAAQmpAAlaitg");
		this.shape_45.setTransform(148.925,-273.175);
	
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f().s("#FF00CC").ss(1,1,1).p("AwhDwQANmjDFlaQBZidBoh4QDYg2DqAAQGsAAFZC1QFSC0CXD/QgNGmjGFZQhZCchnB4QjXA2jrAAQmrAAlai1QlTi1iWj/g");
		this.shape_46.setTransform(149.975,-282.725);
	
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#FF00CC").s().p("Ao4KkQlTi1iWj/IAAAAQANmjDFlaQBZidBoh4QDYg2DqAAQGsAAFZC1QFSC0CXD/QgNGmjGFZQhZCchnB4QjXA2jrAAQmrAAlai1g");
		this.shape_47.setTransform(149.975,-282.725);
	
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f().s("#FF00CC").ss(1,1,1).p("AwmDjQANmmDNlYQBdicBrh2QDZg5DsAAQGuAAFZC8QFSC9CNEKQgNGojNFYQhdCchsB3QjXA4jsAAQmvAAlYi9QlTi9iNkKIAAAAg");
		this.shape_48.setTransform(150.975,-292.3);
	
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#FF00CC").s().p("ApGKrQlTi9iNkLIAAAAIAAAAQANmlDNlZQBdicBrh3QDZg4DsAAQGuAAFZC9QFSC8CNEJQgNGpjNFYQhdCchsB2QjXA4jsABQmvAAlYi9g");
		this.shape_49.setTransform(150.975,-292.3);
	
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f().s("#FF00CC").ss(1,1,1).p("AwsDXQANmoDWlYQBgicBwh0QDZg7DuAAQGwAAFZDEQFRDECFEVQgNGrjVFXQhhCchwB1QjYA6juAAQmxAAlYjFQlSjEiFkWIAAAAg");
		this.shape_50.setTransform(152,-301.85);
	
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#FF00CC").s().p("ApVKxQlSjEiEkWIgBAAIAAgBQAOmoDVlXQBgidBwhzQDZg8DtAAQGyAAFYDFQFRDECFEVQgNGrjVFXQhhCchwB1QjYA5juAAQmxAAlYjEg");
		this.shape_51.setTransform(152,-301.85);
	
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f().s("#FF00CC").ss(1,1,1).p("AwxDKQANmrDdlXQBkicB0hyQDag9DvAAQG0AAFXDMQFRDMB8EgQgNGujdFWQhlCch0ByQjYA9jwAAQmzAAlYjNQlRjMh8kgg");
		this.shape_52.setTransform(153.025,-311.4);
	
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#FF00CC").s().p("ApkK4QlRjNh8khIAAAAQANmqDdlYQBkibB0hzQDag9DvAAQG0AAFXDMQFRDNB8EgQgNGtjdFXQhlCbh0ByQjYA9jwAAQmzAAlYjMg");
		this.shape_53.setTransform(153.025,-311.4);
	
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f().s("#FF00CC").ss(1,1,1).p("Aw3C9QANmtDmlWQBnibB5hwQDahADwAAQG3AAFXDUQFQDUB0ErQgOGwjlFWQhoCbh4BwQjaA/jxAAQm2AAlXjUQlRjUhzksIAAAAg");
		this.shape_54.setTransform(154.05,-320.975);
	
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#FF00CC").s().p("ApzK+QlQjUh0ksIAAAAIAAgBQAOmtDllWQBnibB5hwQDahADwAAQG3AAFXDUQFQDUB0ErQgNGwjmFWQhoCbh5BwQjZA/jxAAQm2AAlXjUg");
		this.shape_55.setTransform(154.05,-320.975);
	
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f().s("#FF00CC").ss(1,1,1).p("Aw9CwQAOmvDulWQBribB8huQDbhCDyAAQG6AAFWDcQFQDcBrE2QgOGzjuFVQhrCbh9BuQjaBCjxAAQm6AAlWjdQlRjchqk3IgBAAg");
		this.shape_56.setTransform(155.05,-330.5);
	
		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#FF00CC").s().p("AqALEQlSjchqk3IAAAAIAAAAQAOmwDtlVQBribB8hvQDchBDygBQG5AAFWDdQFQDbBrE2QgOGzjuFVQhrCah9BvQjZBCjzgBQm5ABlVjdg");
		this.shape_57.setTransform(155.05,-330.5);
	
		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f().s("#FF00CC").ss(1,1,1).p("AxCCkQANmyD2lVQBviaCBhsQDbhFD0AAQG8AAFVDkQFPDkBjFBQgNG1j2FUQhvCaiCBtQjaBEjzAAQm9AAlUjkQlRjkhilCg");
		this.shape_58.setTransform(156.1,-340.075);
	
		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#FF00CC").s().p("AqQLLQlQjkhilCIAAgBQAOmyD1lVQBviaCBhsQDchFDzAAQG8AAFVDkQFPDkBjFBQgNG1j3FUQhuCaiCBtQjaBEj0AAQm8AAlVjkg");
		this.shape_59.setTransform(156.1,-340.075);
	
		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f().s("#FF00CC").ss(1,1,1).p("AxICXQAOm0D+lUQBziaCFhqQDchHD0AAQHAAAFUDsQFPDrBaFNQgOG3j9FTQhzCaiGBrQjaBGj2AAQm/AAlUjsQlPjshalNIgBAAg");
		this.shape_60.setTransform(157.1,-349.625);
	
		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#FF00CC").s().p("AqeLRQlQjshZlNIgBAAIAAgBQAPm0D9lUQBziaCFhqQDchHD0AAQG/AAFVDsQFODrBbFNQgOG3j+FTQhyCaiGBrQjaBGj2AAQm/AAlUjsg");
		this.shape_61.setTransform(157.1,-349.625);
	
		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f().s("#FF00CC").ss(1,1,1).p("AxNCLQANm3EGlTQB2iaCKhoQDchJD3AAQHCAAFTDzQFOD0BSFXQgOG6kFFTQh3CZiKBpQjbBIj3AAQnCAAlTj0QlPjzhRlYg");
		this.shape_62.setTransform(158.15,-359.175);
	
		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#FF00CC").s().p("AqtLXQlPjzhRlYIAAgBQANm3EHlTQB2iaCJhoQDchJD3AAQHBAAFUDzQFPD0BRFXQgOG6kFFTQh3CZiKBpQjbBIj3AAQnCAAlTj0g");
		this.shape_63.setTransform(158.15,-359.175);
	
		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f().s("#FF00CC").ss(1,1,1).p("AxSB+QAOm5ENlSQB6iaCOhmQDdhMD4AAQHEAAFTD8QFOD7BJFjQgOG8kOFSQh6CZiOBnQjcBLj4AAQnFAAlSj8QlPj7hIlkg");
		this.shape_64.setTransform(159.15,-368.75);
	
		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#FF00CC").s().p("Aq8LeQlOj7hIlkIAAgBQAOm5ENlSQB6iaCOhmQDdhMD4ABQHEAAFTD7QFND7BKFjQgOG8kOFSQh6CZiPBmQjbBMj4AAQnFAAlTj8g");
		this.shape_65.setTransform(159.15,-368.75);
	
		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f().s("#FF00CC").ss(1,1,1).p("AxYByQAOm8EWlSQB9iYCShkQDehOD5AAQHIAAFRECQFOEEBAFtQgOG/kWFRQh+CZiSBlQjcBMj6AAQnHAAlSkDQlOkDhAlvIAAAAg");
		this.shape_66.setTransform(160.175,-378.3);
	
		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#FF00CC").s().p("ArKLkQlOkDhAluIAAAAIAAgBQAOm9EWlRQB9iZCShjQDehPD5AAQHIABFREDQFOEDBAFtQgOG/kWFRQh+CZiSBlQjcBMj6AAQnHAAlSkDg");
		this.shape_67.setTransform(160.175,-378.3);
	
		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f().s("#FF00CC").ss(1,1,1).p("AxeBlQAOm+EelRQCBiYCXhjQDehQD6AAQHLAAFQEMQFOEKA4F5QgPHBkdFRQiCCYiXBjQjdBPj7AAQnKAAlRkLQlOkMg3l5g");
		this.shape_68.setTransform(161.2,-387.85);
	
		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#FF00CC").s().p("ArYLqQlPkLg3l5IAAgBQAOm+EflRQCAiZCXhiQDehQD6AAQHLAAFRELQFNELA4F5QgOHBkeFQQiCCZiXBjQjcBPj8AAQnKAAlQkMg");
		this.shape_69.setTransform(161.2,-387.85);
	
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f().s("#FF00CC").ss(1,1,1).p("AxjBZQAOnBEmlQQCFiYCahgQDfhTD8AAQHNAAFQETQFNETAvGDQgOHEkmFQQiFCYibBhQjeBRj8AAQnNAAlQkTQlOkTgumFg");
		this.shape_70.setTransform(162.225,-397.425);
	
		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#FF00CC").s().p("ArnLxQlOkTgumFIAAAAQAOnBEmlQQCFiYCahgQDfhTD8AAQHNAAFQETQFNETAvGDQgOHEkmFQQiFCYibBhQjeBRj8AAQnNAAlQkTg");
		this.shape_71.setTransform(162.225,-397.425);
	
		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f().s("#FF00CC").ss(1,1,1).p("AxpBMQAPnEEulPQCIiYCfheQDfhVD+AAQHQAAFPEcQFMEaAnGOQgOHHkvFPQiICXigBfQjeBVj+AAQnPAAlQkcQlNkbglmQIgBAAg");
		this.shape_72.setTransform(163.225,-406.95);
	
		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#FF00CC").s().p("Ar2L3QlNkbglmQIgBAAIAAgBQAPnDEulPQCIiYCfheQDfhVD+AAQHQAAFPEbQFMEbAnGOQgOHHkvFPQiICYigBeQjeBVj+AAQnPAAlQkcg");
		this.shape_73.setTransform(163.225,-406.95);
	
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f().s("#FF00CC").ss(1,1,1).p("AxuA/QAOnGE2lOQCMiXCjhcQDghYD/AAQHTAAFOEjQFMEjAeGZQgOHJk2FOQiNCXikBdQjeBXkAAAQnSAAlPkjQlMkjgdmbg");
		this.shape_74.setTransform(164.275,-416.525);
	
		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#FF00CC").s().p("AsFL+QlMkjgdmbIAAgBQAOnGE2lOQCMiXCjhcQDghYD/AAQHTAAFOEjQFMEjAeGZQgOHJk2FOQiNCXikBdQjeBXkAAAQnSAAlPkjg");
		this.shape_75.setTransform(164.275,-416.525);
	
		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f().s("#FF00CC").ss(1,1,1).p("Ax0AzQAPnIE+lOQCQiXCnhaQDhhaEAAAQHWAAFNErQFMEqAVGlQgPHMk+FNQiQCXioBbQjfBYkBAAQnVAAlOkqQlMkrgVmmg");
		this.shape_76.setTransform(165.275,-426.1);
	
		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#FF00CC").s().p("AsTMFQlMkrgVmmIAAgBQAPnJE+lNQCQiXCnhaQDhhaEAAAQHWAAFNErQFMEqAVGlQgPHMk+FMQiQCYioBaQjfBZkBAAQnVAAlOkqg");
		this.shape_77.setTransform(165.275,-426.1);
	
		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f().s("#FF00CC").ss(1,1,1).p("Ax5AmQAOnLFGlNQCUiWCrhYQDhhcECAAQHZAAFMEyQFLEyANGwQgOHOlHFNQiUCWisBZQjfBbkDAAQnYAAlNkzQlMkygLmxg");
		this.shape_78.setTransform(166.325,-435.625);
	
		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#FF00CC").s().p("AsiMKQlMkygLmxIAAgBQAOnLFGlNQCUiWCrhYQDhhcECAAQHZAAFMEyQFLEyANGwQgOHOlHFNQiUCWisBZQjfBbkDAAQnYAAlNkzg");
		this.shape_79.setTransform(166.325,-435.625);
	
		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f().s("#FF00CC").ss(1,1,1).p("Ax/AaQAPnOFOlMQCYiXCyhWQDfheECAAQHcAAFME7QFME6ADG9QgPHPlOFLQiYCWixBXQjfBekDAAQncAAlMk7QlMk6gDm9g");
		this.shape_80.setTransform(167.325,-445.2);
	
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#FF00CC").s().p("AswMRQlMk7gDm7IAAgBQAPnOFOlMQCYiXCyhWQDfhdECAAQHcAAFME6QFME7ADG8QgPHPlOFLQiYCXixBWQjfBdkDAAQncAAlMk6g");
		this.shape_81.setTransform(167.325,-445.2);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[]},1).wait(2));
	
		// motiontw
		this.instance_1 = new lib.nube1("synched",0);
		this.instance_1.setTransform(136.85,65.85,1,1,0,0,0,136.8,66.2);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:125.9,regY:65.7,skewX:-0.1214,skewY:-0.0447,x:147.95,y:64.95},0).wait(1).to({scaleY:0.9999,skewX:-0.2428,skewY:-0.0894,x:169.95,y:64.55},0).wait(1).to({skewX:-0.3643,skewY:-0.1341,x:191.9,y:64.15},0).wait(1).to({scaleY:0.9998,skewX:-0.4857,skewY:-0.1789,x:213.95,y:63.75},0).wait(1).to({scaleX:1.0001,skewX:-0.6071,skewY:-0.2236,x:235.95,y:63.35},0).wait(1).to({scaleY:0.9997,skewX:-0.7285,skewY:-0.2683,x:257.95,y:62.9},0).wait(1).to({scaleY:0.9996,skewX:-0.8499,skewY:-0.313,x:279.9,y:62.5},0).wait(1).to({skewX:-0.9713,skewY:-0.3577,x:301.95,y:62.1},0).wait(1).to({scaleY:0.9995,skewX:-1.0928,skewY:-0.4024,x:323.95,y:61.65},0).wait(1).to({skewX:-1.2142,skewY:-0.4471,x:345.95,y:61.25},0).wait(1).to({scaleY:0.9994,skewX:-1.3356,skewY:-0.4919,x:368,y:60.85},0).wait(1).to({skewX:-1.457,skewY:-0.5366,x:389.95,y:60.45},0).wait(1).to({scaleY:0.9993,skewX:-1.5784,skewY:-0.5813,x:411.95,y:60.05},0).wait(1).to({skewX:-1.6999,skewY:-0.626,x:433.95,y:59.6},0).wait(1).to({scaleY:0.9992,skewX:-1.8213,skewY:-0.6707,x:456,y:59.25},0).wait(1).to({scaleX:1.0002,skewX:-1.9427,skewY:-0.7154,x:477.95,y:58.85},0).wait(1).to({scaleY:0.9991,skewX:-2.0641,skewY:-0.7602,x:499.95,y:58.45},0).wait(1).to({skewX:-2.1855,skewY:-0.8049,x:522,y:58.05},0).wait(1).to({scaleY:0.999,skewX:-2.3069,skewY:-0.8496,x:544,y:57.65},0).wait(1).to({skewX:-2.4284,skewY:-0.8943,x:566,y:57.2},0).wait(1).to({scaleY:0.9989,skewX:-2.5498,skewY:-0.939,x:587.95,y:56.8},0).wait(1).to({scaleY:0.9988,skewX:-2.6712,skewY:-0.9837,x:610,y:56.4},0).wait(1).to({skewX:-2.7926,skewY:-1.0284,x:632,y:56},0).wait(1).to({scaleY:0.9987,skewX:-2.914,skewY:-1.0732,x:654,y:55.6},0).wait(1).to({skewX:-3.0355,skewY:-1.1179,x:676,y:55.15},0).wait(1).to({scaleX:1.0003,scaleY:0.9986,skewX:-3.1569,skewY:-1.1626,x:698,y:54.75},0).wait(1).to({skewX:-3.2783,skewY:-1.2073,x:720,y:54.35},0).wait(1).to({scaleY:0.9985,skewX:-3.3997,skewY:-1.252,x:742.05,y:53.95},0).wait(1).to({skewX:-3.5211,skewY:-1.2967,x:764.05,y:53.5},0).wait(1).to({scaleY:0.9984,skewX:-3.6425,skewY:-1.3414,x:786,y:53.1},0).wait(1).to({skewX:-3.764,skewY:-1.3862,x:808.05,y:52.7},0).wait(1).to({scaleY:0.9983,skewX:-3.8854,skewY:-1.4309,x:830.05,y:52.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(2));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-1435.7,1383.2,1566.8);
	
	
	// stage content:
	(lib.AnimatePriss = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// motion_tween_
		this.instance = new lib.nube("synched",0);
		this.instance.setTransform(134.85,678.55,0.9751,1.0005,0,-1.7227,0,125.8,65.6);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#00FFFF").s().p("AUvM0IAAg2IAAg/IAAg3QgBgbAEgbQABgMAFgLIAAEkQgJgUAAgXgA0Hr3QgigDgLghQgDgHABgIQABgjAhgNQAfgNAYAaQAXAbgPAfQgOAdgdAAIgHgBg");
		this.shape.setTransform(-121.35,615.9083);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(41));
	
		// frametoframesun
		this.instance_1 = new lib.sun("synched",0);
		this.instance_1.setTransform(161.6,175.5,1,1,1.9999,0,0,158.8,175.2);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFF00").s().p("AYhSBIABAAIAEAEIAFADIADAFIADAEIADAFIACAEIADAHIADAHIABAGIAAAHIgBAIIgBAHIgDAEIgCAFIgCAEIgEAFIgDADIgEADIgEAEIgEACIgEACgA41FzQgGgPgBgLQAAgKACgNIAFgXQABgJAAgIIACABIAFADIAEAAIgEBrIgIgWgAgoyqIAAgFIAAgGIABgFIABgFIACgFIADgFIADgFIADgEIAEgDIAEgEIAFgDIAGgCIAFgDIAFgBIAGgBIAGgBIAGABIAGABIAFACIAGADIAFACIAEAEIAFAFIAEADIAAABQgcAIglAPQgTAIgLAIIAAgDg");
		this.shape_1.setTransform(158.7958,112.2);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFF00").s().p("AY0SbIABABIAFADIAEAEIAEAEIACAFIADAFIADAEIACAHIACAHIABAHIAAAHIgBAHIgCAHIgCAFIgDAEIgDAEIgCAFIgEADIgEAEIgFACIgEADIgDACgA4HE1IgLgBIgKgCQgFgBgFgDIgKgEIgJgHQgEgDgDgFIgDgEIgEgFIgCgEIgCgHIgCgHIgBgHIAAgHIABgHIACgHIACgEIACgFIAEgEIADgEIADgEIAEgDIAEgDIAFgDIAFgCIAGgCIAGgBIAGAAIAGAAIAGABIAGABIAFADIAEACIAGAEIADAAIgIBqIgKgBgABNx9IAAgBQgCgMgEgMIgHgYIgBgHIAAgGIgBgGIAAgGIABgFIAAgGIABgFIABgFIACgEIADgFIAEgEIACgEIAFgEIAEgDIAFgDIAFgDIAGgCIAGgBIAGAAIAGAAIAGAAIAFACIAGACIAFADIAFADIAFADIAEAFIADAEIAEAFIACAEIABAEIABAGIABAFIACAFIAAAFIABAIIADAMIADALIAEALIACALIACAOIABAMg");
		this.shape_2.setTransform(154.65,114.3875);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("ALES1IABAAIAFAEIAEAEIADAEIADAFIACAEIADAFIACAHIABAHIABAHIAAAHIgBAHIgCAHIgDAEIgDAFIgCAEIgEAEIgDAEIgEADIgFACIgEADIgEACgArPyXIgBgBIgFgYIgHgZIgBgGIABgGIgBgGIAAgGIABgGIAAgFIABgFIACgFIADgFIACgEIAEgFIAEgDIADgEIAGgDIAEgDIAGgCIAGgCIAFgBIAGgBIAGABIAGABIAGABIAGACIAEADIAGADIAEAEIAEAFIADAEIADAFIACAFIACAFIABAFIABAFIAAAFIAAAGIABAHIACAMIAEAMIACALIACALIABAOIABAMg");
		this.shape_3.setTransform(240.4,116.175);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFF00").s().p("AKaTMIABABIAEAEIAEAEIADAEIADAFIADAFIACAEIABAHIACAHIABAHIgBAHIgBAHIgDAHIgCAEIgDAFIgDAEIgEAEIgDADIgFADIgEADIgFACIgDACgAqmywIAAgBIgFgYIgGgZIAAgHIABgGIgBgGIABgGIAAgFIABgFIABgFIACgFIADgFIADgEIAEgEIADgEIAEgDIAFgEIAFgDIAGgBIAFgCIAGAAIAGgBIAGABIAGABIAGACIAFACIAGADQADABABACIAEAEIAEAFIAEAFIACAEIACAFIABAFIABAFIABAGIAAAFIAAAFIABAIIACAMIADALIACAMIACALIABAOIAAAMg");
		this.shape_4.setTransform(242.225,117.875);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFF00").s().p("AgwA1IAAgBIgEgYIgFgaIABgFIAAgGIAAgGIABgGIABgFIAAgFIACgFIACgFIADgFIADgEIAEgEIADgEIAEgDIAFgDIAGgDIAFgBIAGgCIAGAAIAFAAIAGAAIAGACIAGACIAFACIAFAEIAFADIADAFIAEAEIAEAFIACAFIABAEIACAFIAAAGIABAFIAAAFIAAAFIAAAIIACALIACALIACAMIABAMIABANIAAAMg");
		this.shape_5.setTransform(185.275,-9.125);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFF00").s().p("AXoT3IABABIADADIAEAFIADAEIACAGIACAEIABAGIACAHIACAGIAAAHIgBAIIgDAGIgDAGIgCAFIgEAEIgDAFIgEACIgDAEIgFADIgFACIgEACIgEABgA31hAIgBgEIgCgGIgBgIIgCgGIAAgHIACgHIACgHIACgHIADgEIADgEIADgEQACgCACgBQgGAdgEArIgDgFgAFTzdIgBgBIgCgZIgEgZIAAgHIABgFIAAgGIABgGIABgGIABgFIABgEIACgGIAEgEIADgFIAEgDIAEgDIAEgEIAFgCIAGgDIAFgCIAHgBIAFAAIAGAAIAGABIAGACIAFADIAGACIAEADIAGAEIACAEIAFAFIADAFIABAFIACAFIABAEIAAAGIABAFIgBAGIAAAEIAAAIIACANIACALIABAMIABALQABAHgBAHIgBAMg");
		this.shape_6.setTransform(152.65,119.6);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFF00").s().p("AIuUBIABAAIADAEIAFAFIACAFIACAEIACAGIACAFIABAHIABAGIAAAIIgBAHIgDAGIgDAHIgCAFIgEADIgDAEIgEAEIgEADIgEADIgFABIgEACIgFACgAo6zoIAAgBIgDgYIgDgaIABgGIABgGIAAgGIABgFIABgGIAAgFIACgFIADgEIADgFIADgEIAEgEIAEgDIAFgDIAFgDIAFgDIAFgBIAGgBIAHAAIAFAAIAGABIAGACIAGACIAFADIAEADIAFAEIAEAFIAEAFIACAFIACAEIACAFIABAFIABAGIgBAEIAAAGIAAAFIAAAIIABAMIACALIABAMIAAAMIAAAOIgBAMg");
		this.shape_7.setTransform(246.8,119.3125);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFF00").s().p("AIXUKIABABIAEAEIAEAFIACAEIACAFIACAFIABAGIABAGIACAHIAAAIIgCAHIgCAGIgDAGIgDAFIgDAEIgEADIgEAFIgEACIgEADIgFACIgFACIgEABgAojzyIgBgBIgCgYQgCgNgBgMIABgHIABgGIAAgFIABgGIABgFIABgGIACgFIADgEIADgFIADgEIAEgEIAEgDIAFgCIAFgEIAFgCIAGgBIAGAAIAFgBIAHABIAGAAIAFACIAGADIAFADIAEADIAFAEIAEAEIADAGIADAEIACAGIABAEIABAGIABAEIAAAFIgBAGIgBAFIABAIIABAMIABAMIABALIAAALIAAAPIgBAMg");
		this.shape_8.setTransform(247.775,119.2);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFF00").s().p("AIBUTIABABIAEAFIADADIADAGQABACAAADIACAFIABAFIABAHIABAHIAAAHIgBAHIgCAGIgEAHIgDAEIgDAEIgEADIgEAFIgDADIgGACIgFABIgEADIgDABgAoNz7IgBgBIgBgYQgCgNgBgNIABgGIABgGIABgGIABgFIABgGIABgGIACgEIADgFIADgEIADgEIAEgEIAEgCIAFgEIAFgDIAFgCIAHAAIAFgBIAGAAIAGAAIAGABIAGACIAFACIAFAEIAFADIAEAEIAEAEIAEAGIABAFIACAFIACAEIAAAGIABAEIAAAGIAAAGIgBAEIgBAIIABAMIACAMIABAMIAAALIgBAOIgBAMg");
		this.shape_9.setTransform(248.75,119);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFF00").s().p("AW1UcIABABIADAEIAEAFIACAEIACAGIACAFIABAFIABAHIABAHIAAAHIgCAHIgDAHIgDAGIgDAEIgEAEIgDAEIgFADIgDADIgFACIgEACIgFACIgEABgA2ijJIgJgFIgIgHIgHgIQgEgEgCgFIgCgFIgCgFIgBgFIAMgSQAAAdASAZIAGAIgAHT0EIgBgBQABgMgCgMIgCgaIABgGIABgGIABgGIABgFIACgGIABgGIACgEIACgFIAEgDIADgFIAFgDIADgDIAFgDIAFgDIAGgCIAGgBIAGgBIAGAAIAFABIAGABIAGACIAFADIAFADIAFAEIAFAEIADAEIADAGIADAFIABAEIABAGIABAFIAAAFIAAAFIAAAFIgBAFIAAAIIAAAMIABAMIABAMIAAALIgBAOIgBAMg");
		this.shape_10.setTransform(152.65,118.975);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFF00").s().p("AHTUlIABAAIAEAFIADAEIACAFIACAFIACAGIABAEIAAAHIACAIIgBAHIgCAHIgCAGIgEAHIgDADIgDAEIgEAEIgEAEIgEACIgFACIgFACIgFACIgEABgAng0NIgBAAIAAgZIgCgaIABgFIABgHIABgFIABgGIACgGIABgFIACgEIADgFIADgEIAEgEIAEgEIAEgCIAFgDIAFgDIAGgCIAGgBIAGAAIAFAAIAGAAIAGABIAGADIAFADIAFADIAFAEIAEAEIAEAEIACAFIADAGIACAEIABAGIAAAFIAAAFIAAAFIAAAFIgBAGIAAAHIAAANIAAALIABAMIAAAMIgBANIgCAMg");
		this.shape_11.setTransform(250.775,118.1);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFF00").s().p("AG+UtIAAABIADADIAEAFIACAFQABACAAADIACAGIABAEIAAAIIABAHIgBAGIgBAHIgDAHIgEAGIgDAEIgDAEIgEAEIgEADIgEADIgFACIgFACIgEABIgFABgAnJ0VIAAgBIgBgZIgBgZIABgGIABgGIACgGIABgFIACgGIABgGIACgEIADgEIADgEIAEgEIAFgEIADgCIAFgDIAGgDIAFgCIAGgBIAGAAIAGAAIAGABIAFACIAGACIAGADIAEACIAFAFIAEAEIADAFIAEAFIACAFIABAFIABAGIABAEIgBAFIAAAGIAAAEIgBAHIgBAHIABAMIAAAMIAAAMIAAALIgCANIgBANg");
		this.shape_12.setTransform(251.8,117.55);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFF00").s().p("AWMU0IABABIADAEIAEAEIACAGIABAFIACAFIABAGIAAAGIABAHIgBAHIgCAIIgDAGIgDAGIgEAEIgEAEIgDADIgFADIgEADIgEACIgFACIgFABIgEABgA2YlwIgBgGIAAgHIgBgHIABgHIACgHIAAAAIAAAMIAAAYIgBgCgAIz0dIAAgBIAAgYIgBgaIABgGIACgGIABgGIABgFIACgGIABgFIADgEIACgFIAEgEIAEgEIAEgDIAEgDIAFgCIAFgDIAGgCIAGAAIAGgBIAGABIAGABIAFABIAGACIAFADIAFAEIAEAEIAFAEIADAFIADAFIACAFIACAFIAAAFIABAFIAAAFIAAAGIgBAFIgBAFIgBAIIAAAMIABAMIgBALIAAAMQAAAHgCAGIgCANg");
		this.shape_13.setTransform(153.125,116.675);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFF00").s().p("AVsU7IABAAIAEAFIADAFIABAFIACAGIABAEIABAGIABAHIAAAHIgBAHIgCAHIgDAGIgDAGIgEAEIgDAEIgFADIgDADIgFADIgFABIgFACIgEACIgFABgA15nbIAFgCIAEgBIAHgCIAGAAIAGABIABABQgFAEgEAFQgEAJADAIQgMgRgHgGgAJB0kIAAgCQABgMgBgMIAAgZIACgGIABgHIABgFIACgFIACgGIABgFIADgFIADgEIADgEIAEgEIAFgDIADgDIAGgCIAEgDIAGgBIAHgBIAFgBIAGABIAGACIAGABIAFACIAGADQACACACACIAFAEIAEAFIADAEIADAGIACAEIABAGIABAEIABAGIgBAFIAAAFIgBAFIgBAFIAAAIIgBANIAAAMIAAAKIgBAMQAAAHgBAHIgDAMg");
		this.shape_14.setTransform(155.1,116.1);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFF00").s().p("AF4VBIABABIADAFIADAFIACAFIABAFIABAGIABAEIAAAHIABAHIgBAHIgCAHIgDAGIgEAHIgEAEIgDADIgEAEIgFADIgEACIgFACIgFACIgEABIgFAAgAmD0rIgBgBQACgMgBgNIAAgZIACgHIACgGIABgFIABgGIACgFIACgFIADgEIACgFIAEgEIAEgDIAFgEIAEgCIAEgDIAGgCIAFgCIAHAAIAFAAIAGAAIAGABIAGACIAFADIAFADIAFADIAFAFIAEAEIACAFIADAFIADAFIABAFIAAAGIABAEIgBAGIAAAFIgBAFIgBAFIgBAIIAAAMIgBAMIAAAMIgBALIgCAOIgCALg");
		this.shape_15.setTransform(255.225,114.775);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFF00").s().p("AE8WkIAlhcIABABIADAEIADAFIACAFIABAGIACAFIAAAFIAAAHIAAAHIgBAHIgCAHIgDAGIgFAGIgDAEIgEADIgEAEIgEADIgEACIgFACIgFABIgFACIgCAAIgCAAgAlr0yIgBgBIACgYIAAgaIABgGIADgGIABgFIACgGIACgFIABgGIADgEIADgEIADgEIAFgEIAEgDIAEgCIAFgDIAGgCIAFgBIAGgBIAHAAIAFABIAGABIAGACIAFADIAFADIAFADIAEAFIAEAEIADAFIADAFIACAFIABAGIAAAFIABAFIgBAFIAAAFIgBAFIgCAFIgBAIIgBAMIAAAMIAAAMIgBALIgDAOIgCAMg");
		this.shape_16.setTransform(256.3875,113.725);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFF00").s().p("AEjWpIAnhbIABABIACAEIADAFIACAFIABAGIABAFIABAFIAAAHIAAAHIgCAHIgCAHIgDAGQgDADgBADIgEAEIgEADIgDAEIgFACIgEADIgGACIgEABIgFABIgEAAgAlU04IAAgBIABgYIABgaIACgGIACgGIABgGIACgGIACgFIACgFIADgEIADgEIADgEIAFgEIAEgCIAFgDIAEgCIAGgCIAGgCIAGAAIAGAAIAFABIAGABIAGACIAGADIAFADIAEAEIAEAEIAEAEIADAGIADAFIACAFIAAAGIABAFIAAAFIgBAFIAAAFIgBAFIgCAFIgBAIIgBAMIAAAMIgBAMIgBALIgDANIgDAMg");
		this.shape_17.setTransform(257.825,111.675);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFF00").s().p("AEzVTIAAABIADAFIADAFIABAFIACAFIABAGIAAAFIAAAHIAAAHIgBAHIgDAGIgDAHIgEAFIgEAEIgEADIgEAEIgEADIgFACIgFABIgFACIgFAAIgEABgAk80+IAAgBIACgYIACgaIABgGIACgGIABgGIACgFIADgFIABgFIADgFIADgEIAEgDIAEgEIAFgDIAEgCIAGgCIAFgCIAGgCIAGAAIAGAAIAFABIAGABIAGADIAFACIAFAEIAFADIAEAFIAEAEIACAGIADAFIACAFIABAFIAAAGIAAAFIgBAFIAAAFIgBAFIgCAFIgBAIIgBAMIgBAMIgBALIgCALQAAAHgDAHIgCAMg");
		this.shape_18.setTransform(259.1875,109.9875);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFF00").s().p("AEbVYIABABIACAFIADAFIACAFIABAFIABAFIAAAGIAAAHIAAAHIgCAHIgDAHIgDAFIgEAGIgEAEIgEADIgEADIgFADIgEADIgFABIgFABIgFABIgEAAgAkk1DIAAgCQACgMAAgMIACgZIACgHIACgGIACgFIABgGIADgFIACgFIADgEIACgEIAFgEIAEgDIAFgDIAEgCIAFgCIAGgCIAFgBIAHAAIAFAAIAGABIAGABIAFACIAGADIAFAEIAFAEIADAEIAEAFIADAFIACAGIACAFIABAFIAAAFIAAAFIgBAFIgBAFIgBAFIgCAFIgBAIIgBAMIgBAMIgBAMIgCALIgDANIgDAMg");
		this.shape_19.setTransform(260.45,109.0625);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FFFF00").s().p("AEEVdIABAAIACAFIACAFIACAGIACAFIAAAGIABAEIgBAHIAAAHIgCAIIgDAGIgDAGIgFAGIgDADIgFAEIgDADIgGACIgEACIgFACIgEABIgGABIgEABgAkM1JIAAgBIADgYQABgNABgMIACgGIADgHIABgFIACgFIADgFIACgFIACgFIADgDIAFgEIAEgEIAFgCIAEgDIAFgCIAGgCIAFAAIAHAAIAGAAIAFABIAGABIAFACIAFAEIAGADIAEAFIAEAEIAEAFIACAEIACAGIACAFIABAGIAAAGIAAAEIgBAGIAAAEIgCAGIgCAEIgCAIIAAANIgCALIgBALIgDALIgCAOIgEAMg");
		this.shape_20.setTransform(261.65,108.35);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FFFF00").s().p("ADsVhIABABIACAFIADAFIABAFIABAFIABAGIAAAFIgBAHIAAAHIgCAHIgDAGIgDAHIgEAFIgFADIgEAEIgEACIgEADIgFACIgFABIgFACIgFAAIgEABgAj01NIAAgBQACgMABgNIADgZIACgGIACgGIACgFIACgGIADgFIACgFIADgEIADgEIAFgDIAEgEIAEgCIAFgDIAFgCIAGgBIAFgBIAGAAIAHABIAFABIAGABIAFACIAFAEIAFADIAFAEIADAFIAEAFIADAFIACAGIACAFIAAAFIAAAFIAAAFIgBAFQAAADgBADIgBAFIgCAFIgCAHIgBANIgCALIgBAMIgDALIgDANIgEAMg");
		this.shape_21.setTransform(263.175,106.5125);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#FFFF00").s().p("AClW9IAwhYIAAABIACAFIADAFIABAFIACAGIAAAFIAAAFIgBAHIgBAHIgBAHIgDAGIgDAHIgGAFIgEADIgEAEIgEACIgFADIgEACIgFABIgFABIgFABIgFAAgAjb1RIgBgBIAEgYQABgNACgNIADgGIACgFIABgGIACgFIADgFIACgFIADgEIAEgEIAEgDIAEgEIAFgCIAFgCIAFgCIAGgCIAFgBIAGAAIAHABIAFABIAGACIAGADIAEADIAFADIAEAFIAEAEIAEAFIACAFIACAGIACAFIABAGIAAAFIgBAFIgBAFIgBAFIgCAFIgCAFIgBAHIgCANIgCALIgCALIgCAMIgDANIgFAMg");
		this.shape_22.setTransform(264.65,104.775);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FFFF00").s().p("ACNW/IAwhXIAAABIADAFIACAFIABAGQABACAAADIABAGIAAAEQAAAEgCAEIAAAHIgCAGIgDAHIgEAGIgEAFIgFAEIgDADIgFACIgFACIgEACIgFACIgFABIgFAAIgEAAgAjE1VIAAgBIAFgYIADgZIACgGIADgGIACgGIACgFIADgFIACgFIADgEIAEgEIAEgDIAEgDIAFgCIAFgDIAFgBIAGgCIAFAAIAGAAIAHAAIAFACIAGACIAFACIAFAEIAFADIAEAEIAEAFIADAFIACAFIADAGIABAFIAAAGIABAFIgBAFIgBAFIgBAFIgCAFIgCAFIgCAHIgCANIgCALIgCAMIgCALIgEANIgEALg");
		this.shape_23.setTransform(266.225,103.025);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#FFFF00").s().p("ABzXBIAyhWIABABIACAFIACAFIABAGIABAFIAAAGIAAAFIgBAGIAAAHQgCAEgBAEIgDAGIgEAGIgEAFIgFADIgEADIgEADIgFADIgFABIgFABIgFABIgFAAIgEAAgAir1YIAAgCIAEgXIAEgaIADgGIACgFIACgFIADgGIACgFIADgFIADgEIAEgDIAEgEIAEgDIAFgCIAFgCIAFgCIAGgBIAGgBIAFAAIAHABIAFACIAGACIAFADIAFADIAFAEIAEAEIADAFIAEAFIACAFIACAGIABAFIABAGIgBAEIAAAGIgBAFIgBAFIgCAEIgCAGIgCAIIgDALIgCAMIgCAMIgDALIgEAMIgEAMg");
		this.shape_24.setTransform(268.0125,100.55);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFF00").s().p("ACNVuIABABIACAFIACAFIABAFIABAGIAAAFQABADgBADIgBAGIgBAHIgDAHIgDAGIgEAGIgEAFIgFADIgEAEIgEACIgFACIgFADIgFAAIgFABIgFAAIgEABgAiT1bIAAgCIAFgXIAFgZIACgHIADgFIACgFIADgGIACgEIADgFIADgEIADgEIAFgDIAFgDIAEgCIAFgCIAFgCIAGgBIAGAAIAGAAIAGAAIAFACIAGACIAFADIAFADIAFAFIAEADIADAGIADAFIADAFIABAGIACAFIAAAGIAAAFIgBAFIgBAEIgBAGIgCAFIgDAFIgBAHIgDAMIgDALIgCAMIgDALIgEANIgFAMg");
		this.shape_25.setTransform(269.6333,98.85);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#FFFF00").s().p("ARwXEIA0hUIABABIACAFIACAGIABAEIABAGIAAAGIgBAFIgBAHIgBAHIgCAGIgDAHIgFAFIgFAGIgEADIgEADIgFACIgFACIgEACIgGABIgEAAIgFABIgEgBgAyptjIgBgBIAFgDIgBAJIgDgFgAOz1dIABgCIAFgXIAFgaIACgGIADgFIACgFIADgFIADgFIACgFIAEgEIADgEIAFgCIAFgEIAEgCIAFgBIAFgCIAGgBIAGgBIAGABIAGABIAFABIAGADIAFADIAFADIAFAEIADAFIAEAEIADAFIACAGIACAGIABAFIAAAFIAAAGIgBAFIgBAFIgBAFIgCAEIgDAFIgCAIIgDAMIgCALIgDAMIgDALQgBAGgEAGIgEAMg");
		this.shape_26.setTransform(164.1875,97.075);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFF00").s().p("AAXXFIgEAAIA2hTIABABIACAFIACAFIABAFIAAAGIAAAFIAAAGIgCAGIgBAHIgCAHIgDAGIgFAGIgFAFIgEADIgFADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgFADIgFABIgFAAIgFABIgFAAgAhO28IAEgCIAFgCIAEgCIAFgCIAGgBIAGAAIAGABIAGABIAGACIAFADIAFACIAFAEIAFAEIADAEIADAEQgkgMgmgEg");
		this.shape_27.setTransform(287.775,52.35);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#FFFF00").s().p("ARLXFIA4hSIABABIABAFIACAGIABAFQABADgBADIAAAEQABAEgBACIgBAHIgCAGIgCAHIgEAHIgEAFIgGAFIgEADIgEADIgFACIgFACIgEABIgGABIgEAAIgGABIgEgBgAxiucIgJgGIgIgIIgHgHIgGgKQgDgEgBgGQgDgEAAgFIgBgGIAAgFIABgGIABgHIACgGIACgHIAEgHIAEgFIAGgFIAEgDIAEgDIAEgCIAFgCIAFgBIAGgBIAFAAIAEgBIAHABIAFABIAGACIAFADIAFAEIAFADIAFAFIACADIAEAGIACAFIADACIg7BYIgJgGgAPy1hIABgCIAGgXIAGgZIADgGIADgFIACgFIADgGIADgEIACgFIAEgDIAEgEIAEgDIAFgCIAFgCIAFgDIAFgBIAGgBIAGAAIAGABIAGABIAFACIAFACIAGADIAEAEIAFAEIAEAFIADAFIADAFIACAFIABAGIABAFIAAAGIAAAGIgBAEIgCAGQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgCAFIgDAEIgCAIIgDAMIgDALIgDALIgEALIgFANIgFAMg");
		this.shape_28.setTransform(166.4125,92.95);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#FFFF00").s().p("AQ8W7QAEgHAKgGIARgMQAJgHADgMIABABIgBAFIgCAHIgBAHIgDAGIgEAHIgEAFIgFAFIgEADIgFACIgFADIgEACIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABgBAAIADgLgAxZvCIgJgHIgIgHQgEgEgDgEQgEgFgCgEIgEgKIgDgLIAAgFIAAgGIABgFIABgHIACgHIADgHIADgFIAFgGIAFgFIAEgCIAFgDQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAFgCIAFgCIAFgBIAFAAIAFAAIAGABIAGABIAGADIAFADIAFADIAFAEIAEAEIADAFIADAEIACAGIADACIg9BXIgIgGgAQC1iIABgCIAHgXIAGgZIADgFIADgGIACgFIADgFIADgEIADgFIAEgEIADgEIAFgCIAFgDIAFgCIAFgCIAFgBIAGgBIAGAAIAFABIAGABIAGADIAFACIAGADIAEAEIAEAEIAEAEIADAGIADAFIACAFIABAGIABAGIAAAFIAAAFIgBAFIgCAFIgCAFIgBAFIgEAFIgCAHIgDAMIgDALIgEALIgDALIgGANIgFALg");
		this.shape_29.setTransform(169.325,90.275);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#FFFF00").s().p("AQ4WlIgHgKIAEgHIAAABIACAFIABAGIABAFIABABIgCgBgAxevIIgJgHIgIgIIgGgIQgDgEgCgFIgFgLIgDgKIAAgFIAAgGIABgFIACgHIACgHIADgGIADgHIAFgFIAFgEIAFgEIADgCIAGgCIAEgCIAFgBIAGgBIAEAAIAGAAIAFABIAGACIAHACIAEADIAFADIAFAEIAEAFIADAEIADAFIACAFIADACIg/BXIgIgGgAQF1DIABgCIAHgXIAGgZIADgFIADgGIADgFIADgFIADgEIADgFIAEgEIADgDIAFgDIAFgCIAFgCIAEgCIAGgBIAGgBIAFABIAHABIAFABIAGACIAGADIAEADIAFAEIAEAEIAEAFIADAFIADAFIABAFIACAGIABAGIAAAFIgBAFIgBAFIgCAFIgCAFIgCAFIgCAEIgEAIIgDALIgEAMIgDALIgDALIgGAMIgGALg");
		this.shape_30.setTransform(173.6,84.675);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#FFFF00").s().p("AxiDYIgJgHIgHgIIgHgIIgFgKIgEgKQgCgFAAgFIgBgGIAAgFIABgGIACgGIACgIIADgGIAEgGIAEgFIAGgFIAEgCIAFgDIAEgCIAGgCIAEgBIAGgBIAEAAIAGAAIAGACIAFABQADACADAAIAFAEIAFADIAFAEIADAFIADAEIADAFIACAFIADADIhABVIgIgGgAQHh9IABgBIAHgXIAHgZIADgFIADgGIADgFIADgFIAEgEIACgFIAEgDIAEgEIAFgCIAFgDIAFgCIAFgBIAFgBIAGgBIAFAAIAGACIAGABIAFACIAGADIAFADIAEAEIAFAFIADAEIADAFIADAGIABAFIABAGIACAGIgBAFIAAAFIgCAFIgCAFIgBAFIgDAEIgCAFIgDAHIgEAMIgDALIgEALIgEALIgGANIgGAKg");
		this.shape_31.setTransform(178.275,-40.825);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#FFFF00").s().p("AxmDEIgIgGIgIgJQgDgEgDgEIgFgJIgEgLIgCgLIAAgFIAAgGIABgFIACgHIACgHIADgGIAEgFIAEgGIAGgEIAFgDQABgCADgBIAFgBQACgCADAAIAFgCIAFAAQACgBADABIAFAAIAGACIAGABQACACADAAIAFAEIAFAEIAEADIAFAGIADAEIACAFIACAFIADADIhCBTIgIgGgAQJhqIABgCIAHgXIAIgZIADgFIAEgFIACgFIADgFIAEgEIADgFIAEgEIAEgDIAEgCIAFgDIAGgCIAEgBIAGgBIAGgBIAFABIAGABIAGABIAFADIAFADIAGADIAEAEIAEAFIADAEIADAFIADAGIACAFIABAGIAAAGIAAAFIgBAFIgBAFIgCAFIgCAFIgCAEIgDAGIgDAGIgEAMIgEALIgEALIgEALIgGAMIgGALg");
		this.shape_32.setTransform(182.9625,-45.9);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#FFFF00").s().p("AxpCwIgIgHIgIgIQgDgDgDgFIgFgKQgDgFgBgFQgBgFAAgGIgBgFIABgFQAAgDABgDIACgHIACgGIADgHIAEgGIAFgFIAFgEIAFgDIAEgCIAFgCQADgBADAAIAFgCIAFAAIAFAAIAFABIAGABIAFACIAGACIAFAEIAEADIAFAEIAEAFIADAFIACAEIACAGIADACIhDBTIgIgHgAQLhYIAAgCIAJgXIAIgYIADgFIADgFIADgFIADgFIAEgFIADgEIAEgDIADgEIAGgDIAEgBIAGgCIAFgCIAFAAIAGgBIAFABIAGABQADAAADACIAFACIAGADIAEADIAFAEIAEAFIADAFIADAFIADAGIABAFIABAGIABAFIgBAGIgBAFIgBAEIgCAFIgCAFIgCAFIgDAEIgEAIIgEALIgEALIgEALIgEALIgGAMIgGALg");
		this.shape_33.setTransform(187.775,-50.825);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#FFFF00").s().p("AxsCdIgIgHIgHgJQgEgEgDgEIgFgKQgCgFgBgGIgCgKIAAgFIABgGIABgFIACgHIACgHIAEgGIAEgGIAFgFIAFgEIAFgDIAEgCIAFgCQADgBADAAIAEgBIAFgBIAFABIAGAAIAGABIAFACIAGADIAFADIAEAEIAEAEIAEAFIADAFIADAFIABAFIADACIhEBSIgIgGgAQMhHIABgBIAIgWIAJgZIADgFIADgFIADgFIAEgFIADgEIADgFIAEgDIAEgDIAFgCIAFgDIAGgBIAFgBIAFgBIAGAAIAFAAIAGABIAGACIAFACIAFAEIAFADIAFAEIAEAFIADAFIADAFIACAFIABAGIABAGIABAGIgBAFIgBAFIgCAFIgBAEIgDAFIgCAFIgDAEIgEAIIgEALIgEALIgEALIgFAKIgGAMIgGALg");
		this.shape_34.setTransform(192.5125,-55.2875);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#FF9900").s().p("AFYEJQgJgEgEgLQgEgJABgLQAAgGADgFQACgEAFgEIAHgFQAGgCAEAAQASgBAGAKIACgCQAMAVgEAOQgDAGgFAFQgIAHgKADIgHABQgGAAgGgDgAlmitQgOgCgHgKQgKgMAAgUQAAgZANgOQAHgHALgDQAKgCAJAFQAGAEADAAQAGAHADAYIABARQAAAOgBAEQgDALgLAGQgHAEgJAAIgHgBg");
		this.shape_35.setTransform(430.3016,239.0945);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#FFFF00").s().p("AxuCJIgJgHIgHgJIgGgIIgFgKIgDgLQgBgFAAgFIAAgFIAAgGIACgFIACgHIACgHIAEgGIAEgGIAFgFIAFgEIAFgCIAFgCIAFgCQACgCADAAIAFgBIAFAAIAFABIAFAAIAGACIAGABIAFADIAFAEIAFAEIAEAEIAEAFIACAFIACAFIACAFIADACIhGBRIgHgHgAQNg0IABgBIAJgXIAIgYIAEgGIAEgFIACgEIAEgFIAEgEIADgFIAEgDIAEgDIAFgCIAFgDIAFgBIAFgBIAFgBIAGAAIAGABIAGABIAFACIAFACIAGAEIAFADIAEAFIAEAEIADAFIACAFIADAGIABAFIABAGIAAAGIAAAFIgCAGIgBAEQAAABAAABQgBAAAAABQAAABAAAAQgBAAAAABIgCAFIgDAEIgDAFIgEAHIgEALIgEALIgFALIgEAKIgHALIgHALg");
		this.shape_36.setTransform(197.4625,-60.0375);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#FF9900").s().p("AFUEPQgJgFgFgKQgDgKABgKQAAgHADgFQADgDAFgEIAHgFQAFgCAFAAQASgBAGAKIABgCQAMAVgEAOQgEAHgFAEQgIAHgJADIgGABQgHAAgGgDgAljizQgNgDgIgJQgJgNAAgUQABgZANgOQAHgHAKgCQALgCAJAFQAFAEAEAAQAGAHACAYIABASQAAANgBAEQgEAKgLAHQgGAEgJAAIgIgBg");
		this.shape_37.setTransform(430.1614,238.1814);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#FFFF00").s().p("AxxB1IgIgHIgHgJIgFgJIgGgJIgDgLIgBgKIABgGIAAgFIABgFIADgHIADgHIADgGIAFgFIAEgGIAGgEIAFgCIAFgCIAEgCQACgBAEAAIAEgBIAFAAIAGABIAEAAIAHABIAFADIAGADIAFADIAEAEIAEAFIAEAEIACAFIACAFIADAFIACADIhHBPIgIgHgAQOgiIAAgBIAKgXIAJgYIADgFIAEgFIADgEIAEgFIADgEIADgFIAFgDIAEgDIAFgCIAFgCIAGgCIAFgBIAEAAIAHAAIAFAAIAGACIAGACIAFACIAFAEIAFADIAEAFIAEAEIADAFIACAGIACAFIABAGIABAGIABAGIgBAFIgBAFIgCAFIgCAFIgDAEIgCAEIgDAFIgEAHIgEALIgFALIgEAKIgGAKQgCAGgEAGIgHAKg");
		this.shape_38.setTransform(202.6,-64.975);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#FF9900").s().p("AFPEVQgIgFgFgLQgDgJABgLQABgGADgFIAHgHIAIgFQAFgDAFABQASAAAGAKIABgCQALAVgFANQgCAHgGAFQgIAHgKACIgGABQgHAAgGgDgAlgi6QgMgCgIgKQgJgNABgUQABgZANgNQAHgIALgBQALgCAIAFQAGAEADAAQAGAIACAXIAAASQAAAOgBAEQgEAKgLAGQgHADgHAAIgKgBg");
		this.shape_39.setTransform(430.3984,236.3291);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#FFFF00").s().p("AxzBiIgIgIIgGgJIgGgJQgDgEgBgFQgDgFAAgGQgCgFABgGIAAgFIABgFIABgFIADgHIACgHIAEgGIAEgGIAFgDIAGgEIAFgDIAFgBIAEgCQADgCADAAIAFAAIAFAAIAFAAIAFABIAGABIAFADIAGADIAEAEIAFADIAEAEIAEAFIACAFIACAFIACAFIACADIhIBOIgIgHgAQOgQIABgBIAKgWQAEgMAGgLIADgGIAEgFIADgFIAEgEIADgEIAEgFIAEgDIAEgCIAFgDIAFgCIAFgBIAFgBIAGAAIAFAAIAGAAIAGACIAGACIAFACIAFAEIAFAEIADAEIAEAFIADAFQACADAAACIADAGIABAGIAAAGIAAAFIAAAGIgCAFIgBAEIgCAFIgDAFIgCAEIgEAEIgDAHIgFAKIgFALIgFALIgFAKIgHAMIgHAKg");
		this.shape_40.setTransform(208.1708,-70.7625);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#FF9900").s().p("AFKEbQgIgFgEgLQgEgJACgLQABgGADgFQACgEAFgDIAIgFQAFgCAEAAQATAAAFAKIACgBQALAVgFANQgDAHgGAEQgIAHgJACIgHABQgHAAgGgDgAlci/QgNgEgHgKQgKgMACgVQABgYANgNQAIgIAKgBQAMgCAIAGQAFAEAEAAQAGAIABAXIAAASQAAAOgCADQgDALgMAGQgGADgIAAIgJgBg");
		this.shape_41.setTransform(430.6204,234.6308);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#FFFF00").s().p("Ax1BOIgHgIIgHgJQgDgEgCgFIgFgKIgCgLIgBgKIAAgGIABgFIACgFIACgGIADgGIAEgGIAEgGIAFgEIAGgEIAFgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAFgCQACgBADAAIAFgBIAFAAIAFABIAFABIAGABIAFACIAGAEIAEAEIAFAEIAEAEIADAFIACAFIADAEIABAGIADACIhKBNIgIgHgAQOACIABgCIAKgVIAKgXIAEgGIAEgEIADgFIADgFIAEgEIAEgEIAEgDIAFgDIAEgCIAFgCIAGgBIAFgBIAFAAIAGAAIAGABIAGACIAFACIAFACIAFAEIAFAEIAEAEIADAFIADAFIADAGIACAFIAAAGIABAGIAAAFIgBAGIgBAFIgCAFIgCAEIgCAFIgDADIgEAEIgDAHIgGALIgFALIgEALIgGAKIgHALIgHALg");
		this.shape_42.setTransform(213.825,-76.2875);
	
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#FF9900").s().p("AFGEgQgJgFgDgLQgEgJACgLQABgHADgEQADgEAFgDIAHgFQAGgCAEABQASAAAGAKIACgCQAKAWgFANQgDAHgGAEQgIAHgKACIgFABQgIAAgGgEgAlYjGQgNgDgHgKQgJgNABgUQACgZAOgNQAIgHAKgBQALgCAIAGQAGAEADAAQAGAIABAXIAAASQgBAOgBADQgEALgLAFQgHADgIAAIgJgBg");
		this.shape_43.setTransform(430.6981,233.3173);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#FFFF00").s().p("AQOAFIABgCIAKgVIALgXIAEgFIAEgFIADgFIAEgEIAEgEIADgEIAFgDIAEgDIAFgCIAFgBIAFgCIAFgBIAGAAIAFAAIAGABIAGADIAFACIAFACIAGAEIAEADIAEAGIADAEIADAGIADAFIABAGIABAGIABAFIAAAGIgBAFIgCAFIgCAEIgCAFIgCAEIgDAEIgEAEIgEAHIgFALIgFALIgFALIgGAKQgDAFgEAGIgHAKgAx1ArIgIgIIgHgKIgFgJIgEgJIgCgKQgCgFABgGIAAgFIABgGIACgEIACgIIADgGIAEgFIAFgGIAFgEIAGgFIAFgCQAAAAABAAQAAAAABgBQABAAAAAAQABAAABAAIAFgCIAFgBIAFgBIAFAAIAFACIAFABIAGABIAFACIAGAEIAEAEIAFAEIADAFIAEAEIACAFIACAGIACAFIACACIhLBLIgHgHg");
		this.shape_44.setTransform(219.3938,-79.85);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1,p:{rotation:1.9999,x:161.6,y:175.5,regY:175.2}}]}).to({state:[{t:this.shape_2},{t:this.instance_1,p:{rotation:4.0004,x:181.4,y:176.35,regY:175.2}}]},1).to({state:[{t:this.shape_3},{t:this.instance_1,p:{rotation:5.9997,x:196.7,y:177.8,regY:175.3}}]},1).to({state:[{t:this.shape_4},{t:this.instance_1,p:{rotation:8.0002,x:206.3,y:179.2,regY:175.2}}]},1).to({state:[{t:this.shape_5},{t:this.instance_1,p:{rotation:9.9999,x:223.55,y:181.75,regY:175.3}}]},1).to({state:[{t:this.shape_6},{t:this.instance_1,p:{rotation:12.0002,x:233,y:183.95,regY:175.2}}]},1).to({state:[{t:this.shape_7},{t:this.instance_1,p:{rotation:12.9997,x:243.7,y:185.95,regY:175.2}}]},1).to({state:[{t:this.shape_8},{t:this.instance_1,p:{rotation:14.0004,x:251.1,y:187.75,regY:175.3}}]},1).to({state:[{t:this.shape_9},{t:this.instance_1,p:{rotation:15,x:258.4,y:189.6,regY:175.3}}]},1).to({state:[{t:this.shape_10},{t:this.instance_1,p:{rotation:15.9999,x:263.55,y:191.25,regY:175.3}}]},1).to({state:[{t:this.shape_11},{t:this.instance_1,p:{rotation:17.0002,x:273.95,y:193.95,regY:175.3}}]},1).to({state:[{t:this.shape_12},{t:this.instance_1,p:{rotation:18.0003,x:281.15,y:196,regY:175.2}}]},1).to({state:[{t:this.shape_13},{t:this.instance_1,p:{rotation:18.9995,x:289.35,y:198.55,regY:175.2}}]},1).to({state:[{t:this.shape_14},{t:this.instance_1,p:{rotation:20.0002,x:295.3,y:201,regY:175.3}}]},1).to({state:[{t:this.shape_15},{t:this.instance_1,p:{rotation:21,x:304.45,y:203.85,regY:175.2}}]},1).to({state:[{t:this.shape_16},{t:this.instance_1,p:{rotation:21.9998,x:311.5,y:206.75,regY:175.3}}]},1).to({state:[{t:this.shape_17},{t:this.instance_1,p:{rotation:23.0001,x:322.65,y:210.3,regY:175.2}}]},1).to({state:[{t:this.shape_18},{t:this.instance_1,p:{rotation:24.0001,x:331.4,y:213.9,regY:175.3}}]},1).to({state:[{t:this.shape_19},{t:this.instance_1,p:{rotation:25.0002,x:335.9,y:216.55,regY:175.3}}]},1).to({state:[{t:this.shape_20},{t:this.instance_1,p:{rotation:26.0001,x:339.35,y:218.95,regY:175.2}}]},1).to({state:[{t:this.shape_21},{t:this.instance_1,p:{rotation:27.0002,x:346.9,y:222.65,regY:175.3}}]},1).to({state:[{t:this.shape_22},{t:this.instance_1,p:{rotation:27.9997,x:353.25,y:226,regY:175.3}}]},1).to({state:[{t:this.shape_23},{t:this.instance_1,p:{rotation:28.9997,x:359.6,y:229.5,regY:175.2}}]},1).to({state:[{t:this.shape_24},{t:this.instance_1,p:{rotation:29.9999,x:367.8,y:233.6,regY:175.3}}]},1).to({state:[{t:this.shape_25},{t:this.instance_1,p:{rotation:31.0005,x:372.9,y:237,regY:175.2}}]},1).to({state:[{t:this.shape_26},{t:this.instance_1,p:{rotation:32,x:377.8,y:240.55,regY:175.2}}]},1).to({state:[{t:this.shape_27},{t:this.instance_1,p:{rotation:32.9997,x:395.5,y:201.35,regY:175.2}}]},1).to({state:[{t:this.shape_28},{t:this.instance_1,p:{rotation:33.9997,x:388.55,y:248.2,regY:175.3}}]},1).to({state:[{t:this.shape_29},{t:this.instance_1,p:{rotation:35,x:395.2,y:252.6,regY:175.3}}]},1).to({state:[{t:this.shape_30},{t:this.instance_1,p:{rotation:35.9998,x:400.7,y:256.75,regY:175.3}}]},1).to({state:[{t:this.shape_31},{t:this.instance_1,p:{rotation:37.0005,x:408.2,y:261.65,regY:175.3}}]},1).to({state:[{t:this.shape_32},{t:this.instance_1,p:{rotation:38,x:415.6,y:266.75,regY:175.3}}]},1).to({state:[{t:this.shape_33},{t:this.instance_1,p:{rotation:38.9999,x:421.75,y:271.5,regY:175.3}}]},1).to({state:[{t:this.shape_34},{t:this.instance_1,p:{rotation:40.0005,x:426.9,y:276,regY:175.2}}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.instance_1,p:{rotation:40.9995,x:432.1,y:280.7,regY:175.3}}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.instance_1,p:{rotation:41.9998,x:437.85,y:285.75,regY:175.3}}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.instance_1,p:{rotation:42.9997,x:445.45,y:291.65,regY:175.3}}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.instance_1,p:{rotation:43.9997,x:451.95,y:297.2,regY:175.3}}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_1,p:{rotation:45,x:457.3,y:302.55,regY:175.3}}]},1).to({state:[]},1).wait(2));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(257.1,-438.7,1087.1,1182.8);
	// library properties:
	lib.properties = {
		id: '77D828023F3ACC4395A221C3BBAA9DC5',
		width: 1024,
		height: 768,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"images/AnimatePriss_atlas_1.png", id:"AnimatePriss_atlas_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['77D828023F3ACC4395A221C3BBAA9DC5'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;