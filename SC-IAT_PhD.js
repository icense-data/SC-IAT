define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Doing a PhD', //Will appear in the data.
		    title : {
		      media : {word : 'Doing a PhD'}, //Name of the category presented in the task.
		      css : {color:'#003399','font-size':'2em','font-family': 'Verdana'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'I am sure of doing a PhD'}, 
    			{word : 'I want to do research'}, 
    			{word : 'I know I can do a PhD'}, 
    			{word : 'I plan to finish my PhD'}, 
    			{word : 'I am convinced of doing a PhD'}, 
    			{word : 'I look forward to start the PhD'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'False', //Attribute label
			title : {
				media : {word : 'False'}, //Name of the category presented in the task.
				css : {color:'#003399','font-size':'2em', 'font-family': 'Verdana'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'I am walking outside'},
				{word: 'I am watching TV'},
				{word: 'I live in China'},
				{word: 'I am playing tennis'},
				{word: 'I am driving a car'},
				{word: 'I am sleeping'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#003399','font-size':'3em', 'font-family': 'Verdana'}
			},
		attribute2 : 
			{
			name : 'True', //Attribute label
			title : {
				media : {word : 'True'}, //Name of the category presented in the task.
				css : {color:'#003399','font-size':'2em', 'font-family': 'Verdana'}, //Style of the category title.
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
			css : {color:'#003399','font-size':'3em', 'font-family': 'Verdana'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
