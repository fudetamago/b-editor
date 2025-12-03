var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/**
 * エディタ初期化処理
 */
$(function(){

  // 編集メニューの設定
	$('#contents').summernote({
		height: 550,
		fontNames: ["YuGothic","Yu Gothic","Hiragino Kaku Gothic Pro","Meiryo","sans-serif", "Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],
		lang: "ja-JP",
		//toolbar: [
		//	['style', ['bold', 'italic', 'underline', 'clear']],
		//	['font', ['strikethrough']],
		//	['fontsize', ['fontsize']],
		//	['color', ['color']],
		//	['table', ['table']],
		//	['insert', ['link', 'picture']],
		//	['view', ['fullscreen']],
		//	['para', ['ul', 'ol', 'paragraph']],
		//]
	});

});

$('#change').click(function () {
  var code1 = $('#contents').val()
  .replaceAll('<br>', '<br />')
  .replaceAll('<br />', '<br />\n')
  .replaceAll('<\/p>', '<\/p>\n')
  .replaceAll('<br />\n</p>', '<br /></p>')
  .replaceAll('<p><br /></p>', '<br />')
  .replaceAll('<\/div>', '<\/div>\n')
  .replaceAll('<\/h1>', '<\/h1>\n')
  .replaceAll('<\/h2>', '<\/h2>\n')
  .replaceAll('<\/h3>', '<\/h3>\n')
  .replaceAll('<\/h4>', '<\/h4>\n')
  .replaceAll('<\/h5>', '<\/h5>\n')
  .replaceAll('<\/h6>', '<\/h6>\n')
  // .replaceAll('<\/h7>', '<\/h7>\n')
  // .replaceAll('<\/h8>', '<\/h8>\n')
  .replaceAll('<table class="table table-bordered">', '<table>')
  .replaceAll('<\/table>', '<\/table>\n')
  .replaceAll('<tbody>', '\n<tbody>')
  .replaceAll('<\/tbody>', '<\/tbody>\n')
  .replaceAll('<tr>', '\n<tr>')
  .replaceAll('<td>', '<td>\n')
  .replaceAll('<tr><td>', '<tr>\n<td>')
  .replaceAll('<\/td>', '<\/td>\n')
  .replaceAll('</tr></tbody>', '</tr>\n</tbody>')
  .replaceAll('<td>\n<br />\n</td>', '<td><br /></td>')
  .replaceAll(/<p>(.+)<\/p>/g, '$1<br />')
  ;
  $('#output').val(code1);
  $('.preview-area').html(code1);
});

// プレビュー表示
window.onload = function () {

  var outText = document.getElementById('output'),
    prev = document.getElementById('preview');

  outText.addEventListener('keyup', function () {

    var txt = outText.value;
    prev.innerHTML = txt;

  }, false);

}
}