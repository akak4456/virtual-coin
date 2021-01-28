import {configure} from '@storybook/react';
import interoRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
function loadStories(){
    const context = require.context('../src/stories',true,/Story\.jsx$/);
    context.keys().forEach((srcFile)=>{
        interoRequireDefault(context(srcFile));
    })
}

configure(loadStories,module);