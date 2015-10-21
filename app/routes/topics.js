import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let topics = [
			{
			subject: "Psychology",
			complete: false,
			},
			{
			subject: "Computer Science",
			complete: false,
			},
			{
			subject: "Astrology",
			complete: false,
			},
			{
			subject: "Biology",
			complete: false,
			}
		];
	return topics;
	}
})