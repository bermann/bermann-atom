"use babel";

import BermannAtomView from "./bermann-atom-view";
import { CompositeDisposable } from "atom";
import creators from "./creators";

export default {
  bermannAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bermannAtomView = new BermannAtomView(state.bermannAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bermannAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        ...creators
      })
    );
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bermannAtomView.destroy();
  },

  serialize() {
    return {
      bermannAtomViewState: this.bermannAtomView.serialize()
    };
  },

  toggle() {
    console.log("BermannAtom was toggled!");
    return this.modalPanel.isVisible()
      ? this.modalPanel.hide()
      : this.modalPanel.show();
  }
};
