import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import { checkFlexTab } from './helpers';
import Warning from './components/Warning';


const PLUGIN_NAME = 'OneFlexOpenPlugin';

export default class OneFlexOpenPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex) {

    checkFlexTab(
      flex, 
      <Warning key="more-than-one-flex-open" />
    );
  
  }
  
}
