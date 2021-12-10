define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'PhD', //Will appear in the data.
		    title : {
		      media : {word : 'PhD'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'I am sure of doing a PhD'}, 
    			{word : 'I want to do research'}, 
    			{word : 'I can do research'}, 
    			{word : 'I plan to finish my PhD'}, 
    			{word : 'I am convinced of doing a PhD'}, 
    			{word : 'I look forward to start the PhD'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Other', //Attribute label
			title : {
				media : {word : 'Other'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'They'},
				{word: 'Them'},
				{word: 'Theirs'},
				{word: 'Their'},
				{word: 'Others'},
				{word: 'Not me'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Self', //Attribute label
			title : {
				media : {word : 'Self'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Me'},
				{word: 'I'},
				{word: 'Own'},
				{word: 'Myself'},
				{word: 'Self'},
				{word: 'My'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
