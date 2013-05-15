var Question = Backbone.Model.extend({
	urlRoot: "/questions",
	defaults: function(){
		return {
			sentence: "未設定",
			placeholder: "未設定",
			description: "未設定",
			question_type: 1,
			answer_type: 1,
			order_index: 1,
			is_range: false,
			is_shuffle: false,
			range_max: null,
			range_min: null,
			created_at: null,
			updated_at: null,
			is_expand: false,
			is_editing: false
		}
	}
});