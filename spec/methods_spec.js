'use strict';

describe('jQuery Methods', function() {
  beforeEach(function() {
    setFixtures('<p id="bacon"> Bacon ipsum dolor amet ball tip shankle corned beef meatball, ham tongue beef jerky salami. Meatball ham hock pork, pancetta ball tip t-bone doner shank kevin ground round flank sausage turducken filet mignon. Cupim shank tail, kevin pancetta andouille bresaola tenderloin corned beef sausage. Tail t-bone flank tenderloin, brisket landjaeger kielbasa venison.</p><p id="puppy">Puppy kitty ipsum dolor sit good dog yawn bed play dog fish swimming fish aquatic drool crate parrot chirp. Right Paw yawn small animals warm treats biscuit house train. Teeth bird food food Mittens bird seed groom slobber Snowball. Pet Food ID tag feeder lick chew grooming aquarium drool string Spike paws mouse commands food running shake Mittens scratch. Tongue house train purr carrier vaccination grooming pet gate ball leash. Drool fluffy pet food yawn dog cage bed shake bedding kitten nest wagging. Dog House parakeet biscuit kitten Fido stripes lazy dog maine coon cat pet supplies bed whiskers bark tabby lazy cat feathers behavior. </p> <img id="hidden" src=".https://s3.amazonaws.com/learn-verified/smiling-dolphin.jpg" alt="smiling dolphin"><style> #hidden, #favorite-snacks {display: none;} #ballHeight{height: 300px;}</style><img src="https://s3.amazonaws.com/learn-verified/pie-face.gif" alt="pie in face"><div id="favorite-snacks">Favorite Snacks: Cookies Carrot Sticks Raisins</div><a class="flatironLink" href="flatironschool.com">Flatiron School</a><form><input type="checkbox" name="selection" value="yes"><input type="checkbox" name="selection" value="no"></form>')
  });

  it('#fancyShmancy returns the updated paragraph', function() {
    var text = fancySchmancy()[0].innerHTML;
    var textShouldBe = $('.iAmFancy')[0].innerHTML;
    expect(text).toEqual(textShouldBe);
  });

  it('#addText returns the paragraph with new text', function() {
    var text = addText("This paragraph used animal ipsum.")
    text = text[0].innerHTML;
    var textShouldBe = $('p:first-child + p')[0].innerHTML;
    expect(text).toEqual(textShouldBe);
  });

  it('#showDolphin makes the dolphin image visible in the browser', function() {
    expect($("#hidden")).toBeHidden();
    showDolphin();
    expect($("#hidden").attr('style')).toBe("display: inline;");
  });

  it('#hideImage hides the pie face gif', function() {
    hideImage();
    expect($('img[alt="pie in face"]').attr('style')).toBe("display: none;");
  });


  it('#fadeIt shows the list of favorite snacks', function() {
    fadeIt();
    expect($('#favorite-snacks').attr('style')).toBe("display: block; opacity: 0;");
  });

  it('#fadeItOut hides the second paragraph', function() {
    fadeItOut();
    expect($('p:first-child + p').attr("style")).toBe("display: none;");
  });


  it('#findItByClass returns true for the a tag and false for every other tag', function() {
    expect(findItByClass('a')).toBe(true);
    expect(findItByClass('p')).toBe(false);
  });

  it('#formValue returns the value of the last input tag', function() {
      expect(formValue()).toBe("no");
  });
});
