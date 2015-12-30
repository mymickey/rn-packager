# Packager

![react-native](https://img.shields.io/badge/react--native-%3D_0.17.0-green.svg)

## Install

```
$ npm install rn-packager -g
```

## Dependences

```
"devDependencies": {
  "rmc-react-native": "~0.2.0"
}
```
"rmc-react-native" 是 `0.17.0` 的全量sdk工程，你可以 获取 [m-react-native](https://github.com/react-component/m-react-native) `tag 0.2.0` 的代码来精简你的JS核心SDK文件，修改 devDependencies 依赖精简后的工程。

## rn-packager bundle
> 在项目工程根目录下执行打包命令，默认不打包框架代码及polyfills

```
$ rn-packager bundle --entry-file  entry/file/path.js --bundle-output out/file/path.jsbundle --platform ios
```

Options, 参数参考react-native命令，增加了`--include-framework`:

*  --include-framework  Whether to bundle include module `react-native` and polyfills                          [default: false]
    

## Bundle sdk

```
$ rn-packager bundle --entry-file node_modules/rmc-react-native/src/react-native/Libraries/react-native/react-native.js --bundle-output ~/Desktop/react-native-debug.js --platform ios --include-framework
```

## Server

```
$ rn-packager start
```
url请求参数新增`framework=true` 

## Programmatic API
```
var packager = require('rn-packager');

gulp.task('task', function(){
  return antPack.bundle({
    "--entry-file": "tests/index.ios.js",
    "--bundle-output": "tests/index.ios.bundle",
    "--platform": "ios"
  });
});
```