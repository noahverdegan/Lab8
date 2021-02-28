describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(function($el){
        expect($el).to.have.value(75);
      });
  });

  it('Input changes number when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
      .then(function($el){
        expect($el).to.have.value(33);
      });
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
      .then(function($el){
        expect($el).to.have.prop('volume', .33);
      });
  });

  it('Image and sound sources change when party horn button selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image')
      .then(function($el){
        expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
      });
    cy.get('#horn-sound')
    .then(function($el){
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
  });

  it('Volume image changes when increasing volume', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image')
      .then(function($el){
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
      });

    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image')
      .then(function($el){
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
      });

    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image')
      .then(function($el){
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
      });

    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image')
      .then(function($el){
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
      });
  });

  it('Honk button disabled when textbox empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
      .then(function($el){
        expect($el).to.have.attr('disabled');
      });

    cy.get('#volume-number').clear().type('e');
    cy.get('#honk-btn')
      .then(function($el){
        expect($el).to.have.attr('disabled');
      });
  });

  it('Error when number outside range in input', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid').should('have.length', 1)
  });
});
