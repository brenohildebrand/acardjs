/*
    AnimationData

    This file contains all the data needed for animations. You can change it
    in order to add or remove new types of animations. Or, you can use the 
    exported functions to do the same, but at runtime.
*/

const AnimationData = 
{

    fadeIn: 
    {
        name: 'fadeIn',
        description: 'opacity value gradually reaches 1'
        run: function(this: AnimationElement) {
            this.element.style.translate = 
        }
    },

    fadeOut:
    {
        name: 'fadeOut',
        description: 'opacity value gradually reaches 0'
    },



}