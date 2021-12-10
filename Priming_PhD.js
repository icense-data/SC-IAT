define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/quep5.js'], function(APIConstructor, epExtension){
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
    					{word : 'I like studying'}, 
    					{word : 'My dream is to become professor'},
                                        {word : 'I want to study social sciences'},
					{word : 'I like teaching'}, 
    					{word : 'I like statistics'}, 
    					{word : 'I like learning'}, 
    					{word : 'I like studying'}, 
    					{word : 'My dream is to become professor'},
                                        {word : 'I want to study social sciences'}
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
    					{word : 'I applied for a PhD at the VUB'},
              				{word : 'I applied for a PhD at Harvard'},
					{word : 'I live in Belgium'}, 
    					{word : 'I live in China'}, 
    					{word : 'I am driving a car'}, 
    					{word : 'I am doing a psychological test'}, 
    					{word : 'I applied for a PhD at the VUB'},
              				{word : 'I applied for a PhD at Harvard'}
    				]
				}
			],	

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500, 
			errorFBDuration : 1500, 
			ITIDuration : 500,

			//Set the image folder here.
			base_url : {
				image : "https://baranan.github.io/minno-tasks/images/"
			}
	});
});
