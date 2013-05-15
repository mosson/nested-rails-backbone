this["JST"] = this["JST"] || {};

this["JST"]["app_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"flow-area\">\n  <a href=\"#\" class=\"new-trigger\">NEW QUESTION</a>\n	<div class=\"flow-view-container inner\" id=\"FlowViewContainer";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n</nav>\n<div class=\"edit-area\">\n	<div class=\"edit-view-container inner\" id=\"MainViewContainer";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">質問を選択してください</div>\n</div>";
  return buffer;
  });

this["JST"]["edit_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"edit-view\" id=\"EditView";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <h3>Question</h3>\n  <textarea>";
  if (stack1 = helpers.sentence) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sentence; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n\n  <h3>Answer</h3>\n  <dl>\n    <dt>answer_type</dt>\n    <dd>";
  if (stack1 = helpers.answer_type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.answer_type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n  </dl>\n\n  <a href=\"#\" class=\"save\">SAVE</a>\n</div>";
  return buffer;
  });

this["JST"]["flow_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"flow-view\" id=\"FlowView";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"order_index\">\n		";
  if (stack1 = helpers.order_index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.order_index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	</div>\n	<div class=\"pict\">\n\n	</div>\n	<div class=\"sentence\">\n		<a href=\"#\">";
  if (stack1 = helpers.sentence) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sentence; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["new_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"new-view\" id=\"NewView";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <ul class=\"question-catalog\">\n    <li><a href=\"#\" data-answer-type=\"1\">単一テキスト選択</a></li>\n    <li><a href=\"#\" data-answer-type=\"2\">複数テキスト選択</a></li>\n    <li><a href=\"#\" data-answer-type=\"3\">単一画像選択</a></li>\n    <li><a href=\"#\" data-answer-type=\"4\">複数画像選択</a></li>\n    <li><a href=\"#\" data-answer-type=\"5\">自由入力</a></li>\n    <li><a href=\"#\" data-answer-type=\"6\">エリアマッピング</a></li>\n    <li><a href=\"#\" data-answer-type=\"7\">クリッツポイント</a></li>\n    <li><a href=\"#\" data-answer-type=\"8\">スライドバー</a></li>\n  </ul>\n</div>";
  return buffer;
  });

this["JST"]["question_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"question-view\">\n	&nbsp;\n</div>";
  });

this["JST"]["questions_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<div class=\"entry\">\n  <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <div class=\"body\">\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.noop) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.noop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.noop) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["show_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"show-view\" id=\"ShowView";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\nThis is Question ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Show View\n</div>";
  return buffer;
  });