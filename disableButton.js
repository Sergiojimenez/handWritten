$( document ).ready( function() {
		var loadLoadingSpinner = {
			btnSpinner: ".load-spinner",
			btnSubmit:":submit",
			containerSpinner: ".button_container--loading",
			editionLinks: ".link-spinner",
			containerSpinnerEditionLink: ".button_container--linkBlue",
			elegibilityForm: $( ".elegibility_form" ),
			applicationForm: $( ".application_form" ),
			paymentForm: $( ".payment_form" ),
			onClickBtn: function() {
				$( loadLoadingSpinner.btnSpinner ).click( function( e ) {
					$( loadLoadingSpinner.containerSpinner ).hide();
					$( loadLoadingSpinner.containerSpinnerEditionLink ).hide();
					$( loadLoadingSpinner.btnSpinner ).show();
					$( this ).fadeOut( 100, function() {
						$( this ).next( loadLoadingSpinner.containerSpinner ).fadeIn( 100 );
					});
				});
			},
			onClickLink: function() {
				$( loadLoadingSpinner.editionLinks ).click( function( e ) {
					$( loadLoadingSpinner.containerSpinnerEditionLink ).hide();
					$( loadLoadingSpinner.containerSpinner ).hide();
					$( loadLoadingSpinner.btnSpinner ).show();
					$( this ).prev( $( loadLoadingSpinner.containerSpinnerEditionLink ) ).fadeIn( 100 );
				});
			},
			onClickSubmit: function( element ) {
				$( loadLoadingSpinner.btnSubmit ).click( function( e ) {
					if ( element.length > 0 ) {
						var validateSubmit = element.parsley().isValid() ? true : false ;
					} else {
						var validateSubmit = false;
					}
					if ( validateSubmit ) {
						$( this ).fadeOut( 100, function() {
							$( this ).next( loadLoadingSpinner.containerSpinner ).fadeIn( 100 );
						});
					}
				});
			},
		};
		loadLoadingSpinner.onClickSubmit( loadLoadingSpinner.paymentForm );
		loadLoadingSpinner.onClickSubmit( loadLoadingSpinner.elegibilityForm );
		loadLoadingSpinner.onClickSubmit( loadLoadingSpinner.applicationForm );
		loadLoadingSpinner.onClickLink();
		loadLoadingSpinner.onClickBtn();
});