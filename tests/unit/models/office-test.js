import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | office", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function (assert) {
    let store = this.owner.lookup("service:store");
    let office = store.createRecord("office", {
      name: "Main Office",
      street: "Elise Drive",
      city: "Port Alyssonbury",
      state: "NV",
      zip: "51859",
      phone: "(626) 298-1956",
    });

    assert.equal(office.name, "Main Office");
    assert.equal(office.street, "Elise Drive");
    assert.equal(office.city, "Port Alyssonbury");
    assert.equal(office.state, "NV");
    assert.equal(office.zip, "51859");
    assert.equal(office.phone, "(626) 298-1956");
  });
});
