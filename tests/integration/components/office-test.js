import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | office", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // const service = this.owner
    //   .lookup("service:store")
    //   .createRecord("cpt-code", {
    //     description: "Group Therapy",
    //     duration: 50,
    //     rate: 300,
    //   });
    // this.set("service", service);
    // await render(hbs`<Office @service={{this.service}} />`);
    // assert.equal(this.element.textContent.trim(), "");
  });
});
