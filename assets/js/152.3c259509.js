(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{364:function(n,s,e){"use strict";e.r(s);var a=e(42),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"flutter工程启动问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter工程启动问题"}},[n._v("#")]),n._v(" flutter工程启动问题")]),n._v(" "),e("h2",{attrs:{id:"原理介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[n._v("#")]),n._v(" 原理介绍")]),n._v(" "),e("p",[n._v("初始化flutter插件工程后会默认生成android ios example lib4个文件夹")]),n._v(" "),e("ul",[e("li",[n._v("android文件夹负责flutter-android-wrapper")]),n._v(" "),e("li",[n._v("ios文件夹负责flutter-android-wrapper")]),n._v(" "),e("li",[n._v("lib负责flutter-wrapper")]),n._v(" "),e("li",[n._v("example负责进行示例调用")])]),n._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[n._v("#")]),n._v(" 操作步骤")]),n._v(" "),e("ul",[e("li",[n._v("在lib下的****.dart中进行方法封装，example中调用的方法其实都是这里暴露出来的。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 定义方法通道名\n  static const MethodChannel _channel =\n      const MethodChannel('flutterbiometricsplugin');\n// 判断调用平台\n if (Platform.isAndroid)\n// 调用原生方法\nawait _channel.invokeMethod('getPlatformVersion');\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("ul",[e("li",[n._v("在android/ios下的src/main/kotlin中com.包下编写native代码，供flutter-wrapper调用。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 绑定flutter engine\n  override fun onAttachedToEngine(@NonNull flutterPluginBinding: FlutterPlugin.FlutterPluginBinding) {\n    channel = MethodChannel(flutterPluginBinding.flutterEngine.dartExecutor, "flutterbiometricsplugin")\n    channel.setMethodCallHandler(this)\n  }\n\n// 注册插件\n    @JvmStatic\n    fun registerWith(registrar: Registrar) {\n      val channel = MethodChannel(registrar.messenger(), "flutterbiometricsplugin")\n      channel.setMethodCallHandler(FlutterbiometricspluginPlugin())\n    }\n// 具体提的方法调用实现，通过method进行方法映射，通过result进行消息返回。\n    override fun onMethodCall(@NonNull call: MethodCall, @NonNull result: Result) {\n    when (call.method) {\n      "scanYUVImage" -> {\n        val bytesList = call.argument<ArrayList<ByteArray>>("bytesList")\n        val width = call.argument<Int>("width")\n        val height = call.argument<Int>("height")\n        if (bytesList == null || width == null || height == null) {\n          result.error("NOT_NULL", "All input parameters should not be null.", null)\n          return\n        }\n        Thread(Runnable {\n          // 目前只取灰度信息识别\n          val source = PlanarYUVLuminanceSource(bytesList[0], width, height, 0, 0, width, height, false)\n          val scanResult = scanQRCode(source, width * height)\n          // 通过以下代码让result.success在主线程运行，否则会产生RuntimeException\n          Handler(Looper.getMainLooper()).post {\n            result.success(scanResult)\n          }\n        }).start()\n      }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br")])]),e("ul",[e("li",[n._v("example/lib下的main.dart中编写flutter代码，实现功能展现和使用。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text(_result)),\n      body: FutureBuilder<void>(\n        future: _initializeControllerFuture,\n        builder: (context, snapshot) {\n          return Center(child: CircularProgressIndicator());\n          }\n        },\n      ),\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("h1",{attrs:{id:"增加生物识别功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加生物识别功能"}},[n._v("#")]),n._v(" 增加生物识别功能")]),n._v(" "),e("ul",[e("li",[n._v("修改lib目录下的flutterbiometricsplugin.dart，增加方法")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  static Future<String> get callEyeCoolLive async {\n    final String version = await _channel.invokeMethod('callEyeCoolLive');\n    return version;\n  }\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("ul",[e("li",[n._v("修改android/src/main/kotlin/com.example.FlutterbiometricsPlugin目录下的flutterbiometricsplugin，修改方法")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('  override fun onMethodCall(@NonNull call: MethodCall, @NonNull result: Result) {\n    if (call.method == "getPlatformVersion") {\n      result.success("Android ${android.os.Build.VERSION.RELEASE}")\n    } else if (call.method == "callEyeCoolLive") {\n      result.success("EyeCoolLive")\n    } else {\n      result.notImplemented()\n    }\n  }\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("ul",[e("li",[n._v("修改example\\lib目录下的main.dart，增加方法")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  String _callEyeCoolLive = 'test';\n\n  void initState() {\n    super.initState();\n    initPlatformState();\n    initCallEyeCoolLive();\n  }\n\n  Future<void> initCallEyeCoolLive() async {\n    String callEyeCoolLive;\n    // Platform messages may fail, so we use a try/catch PlatformException.\n    try {\n      callEyeCoolLive = await Flutterbiometricsplugin.callEyeCoolLive;\n    } on PlatformException {\n      callEyeCoolLive = 'Failed to execute eye cool live.';\n    }\n    \n    if (!mounted) return;\n\n    setState(() {\n      _callEyeCoolLive = callEyeCoolLive;\n    });\n  }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])]),e("ul",[e("li",[e("p",[n._v("在android目录下增加libs和assets目录，拷贝需要引入的资源")])]),n._v(" "),e("li",[e("p",[n._v("修改build.gradle")])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    sourceSets {\n        main.java.srcDirs += 'src/main/kotlin'\n        main.jniLibs.srcDirs += 'libs'\n    }\n\n    dependencies {\n        implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])\n        implementation \"org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version\"\n    }\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("ul",[e("li",[n._v("在android-manifest.xml增加相关权限")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<uses-permission android:name="android.permission.READ_PHONE_STATE"/>\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>\n<uses-permission android:name="android.permission.CAMERA"/>\n<uses-feature android:name="android.hardware.camera"/>\n<uses-feature android:name="android.hardware.camera.autofocus"/>\n<uses-feature android:name="android.hardware.camera.flash"/>\n<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.WRITE_SETTINGS"/>\n<uses-permission android:name="android.permission.READ_PHONE_STATE"/>\n<uses-permission android:name="android.permission.VIBRATE"/>\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br")])]),e("ul",[e("li",[n._v("引入模块common-eyecoollive\n出现报错Plugin with id 'com.android.library' not found,原因是导入的路径不对，通过右键flutter->open android project打开android工程，然后重新导入。")]),n._v(" "),e("li",[n._v("sync失败，修改gradle-wrapper.properties，把下载路径修改为本地的安装的gradle的路径。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("distributionUrl=file\\:///Users/song/.gradle/wrapper/dists/gradle-5.6.2-all/9st6wgf78h16so49nn74lgtbb/gradle-5.6.2-all.zip\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("ul",[e("li",[n._v("unsolved reference Non-NonNull")])]),n._v(" "),e("p",[e("a",{attrs:{target:"_blank",href:"https://blog.csdn.net/robothost/article/details/78134653"}},[n._v("unsolved reference Non-NonNull解决方案")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("unsolved reference Nullable, 参考"),e("a",{attrs:{href:"http://www.moyck.com/articles/2020/01/07/1578390621389.html",target:"_blank"}},[n._v("Flutter解决androidx报错")]),n._v("，重构后将对应的引用从android.support改成androidx就好了")])]),n._v(" "),e("li",[e("p",[n._v("Program type already present: com.eyecool.BuildConfig")])]),n._v(" "),e("li",[e("p",[n._v("参考"),e("a",{attrs:{href:"https://blog.csdn.net/willhanweijia/article/details/87250386",target:"_blank"}},[n._v("Program type already present报错")]),n._v("原因是dependencies中引入了jar包和module源码，所以冲突了，把libs包的引用去除就好了")])]),n._v(" "),e("li",[e("p",[n._v("引入camera，修改example/pubspec.yaml")])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("dependencies:\n  flutter:\n    sdk: flutter\n\n  flutterbiometricsplugin:\n    # When depending on this package from a real application you should use:\n    #   flutterbiometricsplugin: ^x.y.z\n    # See https://dart.dev/tools/pub/dependencies#version-constraints\n    # The example app is bundled with the plugin so we use a path dependency on\n    # the parent directory to use the current plugin's version. \n    path: ../\n\n  # A Flutter plugin for getting information about and controlling the camera on Android and iOS.\n  # Supports previewing the camera feed, capturing images, capturing video, and streaming image buffers to dart.\n  camera: ^0.5.8+1\n\n  # Flutter plugin for selecting images from the Android and iOS image library,\n  # and taking new pictures with the camera.\n  image_picker: ^0.6.6+1\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^0.1.3\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])]),e("ul",[e("li",[n._v("运行flutter packages get获取第三方camera库")]),n._v(" "),e("li",[n._v("调整build.gradle中配置 android和example/app/src/目录下的都要调整")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("android {\n    compileSdkVersion 28\n\n    defaultConfig {\n        minSdkVersion 23\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("ul",[e("li",[n._v("EyeCoolLiveActivity类未找到，配置AndroidManifest.xml")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('        <activity\n            android:name="com.eyecool.live.EyeCoolLiveActivity"\n            android:screenOrientation="fullSensor"\n            android:theme="@android:style/Theme.NoTitleBar.Fullscreen"\n            android:windowSoftInputMode="stateHidden|stateUnchanged"/>\n        <activity\n            android:name="com.eyecool.live.EyeCoolLiveLandActivity"\n            android:screenOrientation="fullSensor"\n            android:theme="@style/AppTheme.NoActionBar" />\n        <activity\n            android:name="com.eyecool.livetest.ResultActivity"\n            android:theme="@style/AppTheme.NoActionBar" />\n        <activity\n            android:name="com.eyecool.live.FaceDualActivity"\n            android:screenOrientation="fullSensor"\n            android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />\n        <activity\n            android:name="com.eyecool.live.FaceSingleActivity"\n            android:screenOrientation="fullSensor"\n            android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br")])]),e("ul",[e("li",[n._v("resource style/AppTheme.NoActionBar not found，在style.xml中配置，并导入color.xml")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">\n    \x3c!-- Customize your theme here. --\x3e\n    <item name="colorPrimary">@color/colorPrimary</item>\n    <item name="colorPrimaryDark">@color/colorPrimaryDark</item>\n    <item name="colorAccent">@color/colorAccent</item>\n</style>\n\n<style name="AppTheme.NoActionBar">\n    <item name="windowActionBar">false</item>\n    <item name="colorPrimaryDark">#19307f</item>\n    <item name="windowNoTitle">true</item>\n</style>\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("ul",[e("li",[n._v("报错包名未授权，需要修改app的build.gradle配置文件")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('\ndefaultConfig {\n        // 包名必须以com.bankcomm.开头\n        applicationId "com.bankcomm.flutterbiometricsplugin_example"\n        minSdkVersion 23\n        targetSdkVersion 28\n        versionCode flutterVersionCode.toInteger()\n        versionName flutterVersionName\n    }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])]),e("ul",[e("li",[e("p",[n._v("参数解析异常\n"),e("img",{attrs:{src:"xmlparseerror.png",alt:""}})])]),n._v(" "),e("li",[e("p",[n._v("摄像头调用异常\n"),e("img",{attrs:{src:"cameraerror.png",alt:""}})])])])])}),[],!1,null,null,null);s.default=t.exports}}]);