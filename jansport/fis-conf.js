// fis.match('*', {
//   useHash: false
// });

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

// 压缩资源
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});


// 设置打包的目录或者服务器，对应的地址即可
fis.match('*.{png,jpg,gif,js,css}',{
	release:'/$0', //对应目录
	useHash: true  //md5加密
});