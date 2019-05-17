//var _msbuild = require('msbuild');
//var runSequence = require('run-sequence');
//var nugetRestore = require('gulp-nuget-restore');
//var fs = require('fs');
//var util = require("gulp-util");
//var foreach = require("gulp-foreach");
//var gulpPrint = require('gulp-print');
//var newer = require("gulp-newer");
//var debug = require("gulp-debug");
//var rimraf = require('gulp-rimraf');


//////var frb = require("./scripts/Mfed.js");
//////var msbuild = new _msbuild();

//////var config;
//////if (fs.existsSync('./gulp-config.js.user')) {
//////	config = require("./gulp-config.js.user")();
//////}
//////else {
//////	config = require("./gulp-config.js")();
//////}

//////module.exports.config = config;

//////frb.header("This is Frb implementation of Helix Architecture. Smile and be happy :) ", "Federal Reserve Bank of Minnesota...9th District rocks!!!");



//////gulp.task("RunSequence-Demo", function (callback) {
//////	config.runCleanBuilds = true;
//////	return runSequence(
//////		"Update-Glass-Config",
//////		"Publish-Views-Only",
//////		callback);
//////});

//////gulp.task("Build-Solution", function () {
//////	var targets = ["Build"];
//////	if (config.runCleanBuilds) {
//////		targets = ["Clean", "Build"];
//////    }

//////    var solution = "./" + config.solutionName + ".sln";

//////	msbuild.sourcePath = solution;
//////	msbuild.configuration = config.buildConfiguration;
//////	msbuild.buildVerbosity = config.buildVerbosity;
//////	msbuild.stdout = true;
//////	msbuild.errorOnFail = true;
//////	msbuild.buildMaxCpuCount = config.buildMaxCpuCount;
//////	msbuild.toolsVersion = config.toolsVersion;
//////	msbuild.targets = targets;
//////    msbuild.buildPlatform = config.buildPlatform;
//////    msbuild.overrideParams.push('/p:UpdateGlassConfig=true');
//////	msbuild.build();
//////});

//////gulp.task("Build-Solution-No-GlassConfig", function () {
//////	var targets = ["Build"];
//////	if (config.runCleanBuilds) {
//////		targets = ["Clean", "Build"];
//////	}

//////	var solution = "./" + config.solutionName + ".sln";
//////	msbuild.targets = targets;
//////	msbuild.sourcePath = solution;
//////	msbuild.configuration = config.buildConfiguration;
//////	msbuild.buildVerbosity = config.buildVerbosity;
//////	msbuild.stdout = true;
//////	msbuild.errorOnFail = true;
//////	msbuild.buildMaxCpuCount = config.buildMaxCpuCount;
//////	msbuild.toolsVersion = config.toolsVersion;
//////	msbuild.targets = targets;
//////    msbuild.buildPlatform = config.buildPlatform;
//////	msbuild.build();
//////});



//////gulp.task("Update-Glass-Configs", function () {
//////	var files = config.localGlassConfigLocation + "*.config";
//////	var destination = config.glassConfigRoot;
//////	return gulp.src(config.localGlassConfigLocation).pipe(
//////		foreach(function(stream, file) {
//////			console.log("Publishing from " + file.path);
//////			gulp.src(files)
//////				.pipe(newer(destination))
//////				.pipe(debug({ title: "Copying " }))
//////				.pipe(gulp.dest(destination));
//////			return stream;
//////		})
//////	);
//////});

//////gulp.task('Publish-Views-Only', function () {
//////	console.log('Implement Publish Views only here!');

//////});

//////gulp.task('Nuget-Restore', function () {
//////	var solution = "./" + config.solutionName + ".sln";
//////	return gulp.src(solution).pipe(nugetRestore());
//////});


//////var publishStream = function(stream, dest) {
//////	var targets = ["Build"];

//////    return stream.pipe(debug({ title: "Building project:" }));
//////    //msbuild.sourcePath = 'c:/your_app.csproj';
//////    //msbuild.overrideParams.push('/P:User=myusername');
//////    //msbuild.overrideParams.push('/P:Password=myp@assword');
//////    //msbuild.publish();
//////    //.pipe(msbuild({
//////    //	targets: targets,
//////    //	configuration: config.buildConfiguration,
//////    //	logCommand: false,
//////    //	verbosity: config.buildVerbosity,
//////    //	stdout: true,
//////    //	errorOnFail: true,
//////    //	maxcpucount: config.buildMaxCpuCount,
//////    //	nodeReuse: false,
//////    //	toolsVersion: config.buildToolsVersion,
//////    //	properties: {
//////    //		Platform: config.publishPlatform,
//////    //		DeployOnBuild: "true",
//////    //		DeployDefaultTarget: "WebPublish",
//////    //		WebPublishMethod: "FileSystem",
//////    //		DeleteExistingFiles: "false",
//////    //		publishUrl: dest,
//////    //		_FindDependencies: "false"
//////    //	}
//////    //}));
//////};

//////var publishProjects = function (location, dest) {
//////	dest = dest || config.websiteRoot;

//////    console.log("publish to " + dest + " folder");
//////    console.log("Location is " + location + " folder");
//////	return gulp.src([location + "/**/code/*.csproj"])
//////        .pipe(foreach(function (stream, file) { 
//////            console.log("file is " + file.path + " folder");
//////            msbuild.sourcePath = file.path;
//////            msbuild.build();
//////			return publishStream(stream, dest);
//////		}));
//////};

//////gulp.task("Publish-All-Projects", function (callback) {
//////	//return runSequence(
//////	//	"Build-Solution",
//////	//	"Publish-Foundation-Projects",
//////	//	"Publish-Feature-Projects",
//////	//	"Publish-Project-Projects", callback);
//////});

//////gulp.task("Publish-Feature-Projects", function (callback) {
//////	return publishProjects("./src/Feature");
//////});


//////gulp.task("Publish-Foundation-Projects", function (callback) {
//////	return publishProjects("./src/Foundation");
//////});


//////gulp.task("Publish-Project-Projects", function (callback) {
//////	return publishProjects("./src/Project");
//////});

//////gulp.task("Publish-Article",
//////	function(callback) {
//////		msbuild.sourcePath = './src/Feature/Article/tds/Frb.Mpls.Public.Feature.Article.Master/Frb.Mpls.Public.Feature.Article.Master.scproj';
//////		//msbuild.sourcePath = './src/Feature/Article/code/Frb.Mpls.Public.Feature.Article.csproj';
//////		msbuild.build();
//////	});


//////gulp.task("delete-tds-junk",
//////	function() {
//////		console.log("delete-tds-junk");
//////		var files = "./src/**/**/tds/**/{bin,obj}";

//////		return gulp.src(files, { read: false })
//////			.pipe(foreach((stream, file) => {
//////				console.log(file.path);
//////				return stream;
//////			}))
//////			.pipe(rimraf());

//////	});

//////gulp.task("delete-VS-junk",
//////	function() {
//////		console.log("delete-tds-junk");
//////		var files = "./src/**/**/code/{bin,obj}";

//////        return gulp.src(files, { read: false })
//////            .pipe(foreach((stream, file)=> {
//////                console.log(file.path);
//////                return stream;
//////            }))
//////		.pipe(rimraf());

//////	});
var gulp = require('gulp');
var rename = require("gulp-rename");
var header = require('gulp-header');
var replace = require('gulp-string-replace');
var fs = require('fs');

gulp.task('srcjsmover', function(){
	return src('src/*.js')
    .pipe(dest('output/'));
});

gulp.task('moveFileToGulpDir', function() {
    gulp.src('readme.md')
          .pipe(gulp.dest('../gulp/out'));
});

gulp.task('copyComponents', function() {
    gulp.src('../design-system/src/prototype/nunjucks/02_components/i9-side-recommended.html')
		  .pipe(rename(function (path) {
			path.extname = ".cshtml";
			path.basename = '_' + path.basename.replace(/-/g, '_');
  }))
  .pipe(replace(new RegExp('(?<={% include ".)(.*)(?=.html)', 'g'), '$1'))
  .pipe(header('@model Frb.Mpls.Public.Feature.Article.Models.IArticle' + '\n' + '\n'))
  .pipe(replace('{% include \"./', '@{ Html.RenderPartial("'))
  .pipe(replace('.html" %}', '", Model)}'))
  .pipe(gulp.dest("../gulp/components"));
});

gulp.task('replace', function() {
  var templatebase = JSON.parse(fs.readFileSync('template-base.json', 'utf8'));
  //console.log("template.name:" + templatebase.template.name);
  //console.log("template.attributes.title.data:" + templatebase.template.attributes.title.data);
  const array1 = templatebase.template['attributes'];

  for (let elem in array1) {  
    console.log( elem + ".data:" + array1[elem].data )
    console.log( elem + ".type:" + array1[elem].SCtype )
  };
  gulp.src('ITemplate.cs')
  .pipe(replace('{Template}', templatebase.template.name))
  .pipe(gulp.dest("out"));

  //var targetApiUrl = settings.apiUrl[env] ? settings.apiUrl[env] : settings.apiUrl['prod'];
  //if (targetApiUrl) {
  //  gulp.src(['./www/js/app.js'])
  //    .pipe(replace('@@apiUrl', targetApiUrl))
  //    .pipe(gulp.dest(function(file) {
  //      return file.base;
  //    }))
  //}
});

gulp.task("default", [
	"replace"
]);
