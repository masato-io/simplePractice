import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | office", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    const office = this.owner.lookup("service:store").createRecord("office", {
      name: "Main Office",
      street: "Elise Drive",
      city: "Port Alyssonbury",
      state: "NV",
      zip: "51859",
      phone: "(626) 298-1956",
    });
    this.set("office", office);
    await render(hbs`<Office @office={{this.office}}/>`);

    assert.dom("[data-test-name]").hasText("Main Office");
    assert.dom("[data-test-street]").hasText("Elise Drive");
    assert
      .dom("[data-test-city-state-zip]")
      .hasText("Port Alyssonbury, NV 51859");
    assert.dom("[data-test-phone]").hasText("(626) 298-1956");
  });
});
