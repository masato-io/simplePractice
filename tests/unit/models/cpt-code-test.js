import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | cpt code", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function (assert) {
    let store = this.owner.lookup("service:store");
    let service = store.createRecord("cpt-code", {
      description: "Group Therapy",
      duration: 50,
      rate: 300,
    });

    assert.equal(service.description, "Group Therapy");
    assert.equal(service.duration, 50);
    assert.equal(service.rate, 300);
  });
});
