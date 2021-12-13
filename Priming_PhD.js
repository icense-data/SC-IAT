define(['pipAPI', 'https://icense-data.github.io/SC-IAT/Priming_Full_Script.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'PhD', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    				        {word : 'I like teaching'}, 
    					{word : 'I like statistics'}, 
    					{word : 'I like learning'}, 
    					{word : 'I like reading scientific papers.'}, 
    					{word : 'I want to become a professor'},
                                        {word : 'I like to read about social sciences.'},
					{word : 'I am very ambitious'}, 
    					//{word : 'I do not give up easily'}, 
    					//{word : 'I am looking forward to start the PhD'}, 
    					//{word : 'I like science'}, 
    					//{word : 'I like writing'},
                                        //{word : 'I like to study hard'}.
				    ]
				}, 
				{
					name : 'Control', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    					{word : 'I live in Belgium'}, 
    					{word : 'I live in China'}, 
    					{word : 'I am driving a car'}, 
    					{word : 'I am doing a psychological test'}, 
    					{word : 'I work for the NASA'},
              				{word : 'I am 97 years old'},
					{word : 'I am looking at a computer screen'}, 
    					//{word : 'I am having lunch'}, 
    					//{word : 'I work for the NASA'}, 
    					//{word : 'I am using a keyboard'}, 
    					//{word : 'I am 100 years old'},
              				//{word : 'I am running the marathon'}.
    				]
				}
			],	

			nTrialsPerPrimeTargetPair:3, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500, 
			errorFBDuration : 1500, 
			ITIDuration : 400,

			//Set the image folder here.
			base_url : {
				image : "https://baranan.github.io/minno-tasks/images/"
			}
	});
});
