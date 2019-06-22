'use babel';

import BermannAtom from '../lib/bermann-atom';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('BermannAtom', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('bermann-atom');
  });

  describe('when the bermann-atom:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.bermann-atom')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'bermann-atom:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.bermann-atom')).toExist();

        let bermannAtomElement = workspaceElement.querySelector('.bermann-atom');
        expect(bermannAtomElement).toExist();

        let bermannAtomPanel = atom.workspace.panelForItem(bermannAtomElement);
        expect(bermannAtomPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'bermann-atom:toggle');
        expect(bermannAtomPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.bermann-atom')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'bermann-atom:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let bermannAtomElement = workspaceElement.querySelector('.bermann-atom');
        expect(bermannAtomElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'bermann-atom:toggle');
        expect(bermannAtomElement).not.toBeVisible();
      });
    });
  });
});
