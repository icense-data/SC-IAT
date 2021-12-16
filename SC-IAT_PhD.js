define(['pipAPI', 'https://icense-data.github.io/SC-IAT/SC-IAT_Full-Script.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Colored Font', //Will appear in the data.
		    title : {
		      media : {word : 'Colored Font'}, //Name of the category presented in the task.
		      css : {color:'#FF6600','font-size':'1.5em','font-family': 'Verdana'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    			{word : 'I like reading scientific papers'}, 
    			{word : 'I am very ambitious'}, 
   			{word : 'I am very good at statistics'},
			{word : 'I find research very boring'},
			{word : 'I am bad at statistics'},
			{word : 'I want to work in the provate sector'},
			    
		    ], 
		    //Stimulus css (style)
		    css : {color:'#FF6600','font-size':'2em','font-family': 'Verdana'}
		  },	

  		attribute1 : 
			{
			name : 'False', //Attribute label
			title : {
				media : {word : 'False'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'1.5em', 'font-family': 'Verdana'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'I work at the NASA'},
				{word: 'I am a member of the EU parliament'},
				{word: 'I live in Hawaii'},
				{word: 'I am 75 years old'},
				{word: 'I have 8 daughters'},
				{word: 'I am a teenager'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'2em', 'font-family': 'Verdana'}
			},
		attribute2 : 
			{
			name : 'True', //Attribute label
			title : {
				media : {word : 'True'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'1.5em', 'font-family': 'Verdana'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'I am doing a psychological test'},
				{word: 'I live in Belgium'},
				{word: 'I am sitting in front of a screen'},
				{word: 'I am using a laptop'},
				{word: 'I am looking at the screen'},
				{word: 'I am using the keyboard'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'2em', 'font-family': 'Verdana'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
