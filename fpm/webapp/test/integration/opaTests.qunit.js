sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fpm/fpm/test/integration/FirstJourney',
		'fpm/fpm/test/integration/pages/PARENTGROUPMain'
    ],
    function(JourneyRunner, opaJourney, PARENTGROUPMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fpm/fpm') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePARENTGROUPMain: PARENTGROUPMain
                }
            },
            opaJourney.run
        );
    }
);