// Hamburger
      const hamburger = document.querySelector( '.hamburger' );
      const sidebar = document.querySelector( '#sidebar' );
      let sidebarClosed = true;

      hamburger.addEventListener( 'click', () => {
        if ( sidebarClosed ) {
          sidebar.classList.remove( 'close' );
          hamburger.classList.add( 'active' );
          sidebarClosed = false;
        } else if ( !sidebarClosed ) {
          hamburger.classList.remove( 'active' );
          sidebar.classList.add( 'close' );
          sidebarClosed = true;
        }
      } );

      // Sidebar links expand arrow
      const arrow = document.querySelector( '.arrow' );
      arrow.addEventListener( 'click', () => {
        arrow.parentElement.parentElement.classList.toggle( 'show' );
      } );

      // Navlink active
      const links = document.querySelectorAll( '.link' );
      const pages = document.querySelectorAll( '.page' );
      const connectionNetworkManagement = document.querySelector( '.connection-network-management' );
      const mapsCalibration = document.querySelector( '.maps-calibration' );
      const broadcast = document.querySelector( '.measurement-broadcast' );
      const proprietary = document.querySelector( '.measurement-proprietary' );
      const diagnostics = document.querySelector( '.diagnostics' );

      links.forEach( ( link ) => {
        link.addEventListener( 'click', () => {

          for ( let i = 0; i < links.length; i++ ) {
            links[ i ].closest( '.nav-link' ).classList.remove( 'active' );
          }

          link.closest( '.nav-link' ).classList.add( 'active' );

          for ( let i = 0; i < pages.length; i++ ) {
            pages[ i ].classList.remove( 'show' );
          }

          if ( link.classList.contains( 'connection-network-management-link' ) ) {
            connectionNetworkManagement.classList.add( 'show' );
          } else if ( link.classList.contains( 'maps-calibration-link' ) ) {
            mapsCalibration.classList.add( 'show' );
          } else if ( link.classList.contains( 'broadcast-link' ) ) {
            broadcast.classList.add( 'show' )
          } else if ( link.classList.contains( 'proprietary-link' ) ) {
            proprietary.classList.add( 'show' )
          } else if ( link.classList.contains( 'diagnostics-link' ) ) {
            diagnostics.classList.add( 'show' )
          }

        } );
      } );

      //Header Adapter
      const adapterBtn = document.querySelector( '.adapter-container .btn' );
      const plaAdapter = document.querySelector( '.adapter-container .pla' );
      const canAdapter = document.querySelector( '.adapter-container .can' );
      const plaClick = () => {
        adapterBtn.style.left = '0';
        canAdapter.classList.remove( 'active' );
        plaAdapter.classList.add( 'active' );
      };

      const canClick = () => {
        adapterBtn.style.left = '140px';
        plaAdapter.classList.remove( 'active' );
        canAdapter.classList.add( 'active' );
      };

      // Connection Network Management > Firmaware Buttons 
      const firmwareBtn = document.querySelector( '.firmware-settings__box-heading .firmware' );
      const settingsBtn = document.querySelector( '.firmware-settings__box-heading .settings' );

      firmwareBtn.addEventListener( 'click', () => {
        settingsBtn.classList.remove( 'active' )
        firmwareBtn.classList.add( 'active' );
      } )
      settingsBtn.addEventListener( 'click', () => {
        firmwareBtn.classList.remove( 'active' )
        settingsBtn.classList.add( 'active' );
      } )

      // Maps Calibration 
      const cancelSelectionBtn = document.querySelector( '.map-cancel-button' );
      cancelSelectionBtn.addEventListener( 'click', () => {
        document.querySelector( '.x-axis-bar' ).innerHTML = `<span>Axis X</span>`;
        document.querySelector( '.y-axis-bar' ).innerHTML = `<span>Axis Y</span>`;
        document.querySelector( '.axis-display' ).innerHTML = '';
        document.querySelector( '.axis-x' ).selectedIndex = 0;
        document.querySelector( '.axis-y' ).selectedIndex = 0;
        document.querySelector( '.axis-select' ).selectedIndex = 0;
      } );

      // Diagnostics NA Button
      const dmSheets = document.querySelectorAll( '.diagnostics-right-table__buttons .dm-sheet-btn' );
      dmSheets.forEach( sheet => {
        sheet.addEventListener( 'click', () => {
          for ( let i = 0; i < dmSheets.length; i++ ) {
            dmSheets[ i ].classList.remove( 'active' );
          }
          sheet.classList.add( 'active' );
        } );
      } );


      const naButton = document.querySelectorAll( ".na-button" );

      naButton.forEach( ( btn ) => {
        btn.addEventListener( "click", () => {
          btn.classList.toggle( "active" );
        } );
      } );