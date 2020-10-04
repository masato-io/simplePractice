import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | service", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    const service = this.owner
      .lookup("service:store")
      .createRecord("cpt-code", {
        description: "Group Therapy",
        duration: 50,
        rate: 300,
      });
    this.set("service", service);
    await render(hbs`<Service @service={{this.service}} />`);

    assert.dom("[data-test-description]").hasText("Group Therapy");
    assert.dom("[data-test-duration-rate]").hasText("50 minutes – $300");
    assert.dom("[data-test-button]").hasText("Select");
  });
});
