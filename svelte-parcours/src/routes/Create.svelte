<script>
    import { link } from "svelte-spa-router";

    async function getCard (CardId) {
    const response = await fetch(
      import.meta.env.VITE_DIRECTUS_API_URL + "/create-cc" + CardId
    );
    if (response.ok) {
      const CreateCard = await response.json();
    }

    else {
    }
  }

    </script>
    <body>
  <header class="top">
    <h1 class="headings-1">Virtual Card Manager</h1>
    <menu>
      <ul>
        <li><a href="index.html" class="link" use:link>Home</a></li>
        <li><a href="admin.html" class="link"use:link>List all cards</a></li>
        <li><a href="create-cc.html" class="link link--active"use:link>Create new card</a></li>
        <li><a href="index.html" class="link"use:link>Logout</a></li>
      </ul>
    </menu>
  </header>
  <main class="main">
    <section class="card-section" aria-label="Virtual Card Details">
      <div class="card-content">
        <div class="front-card">
          <img src="./images/card-logo.svg" alt="card logo" class="card-logo">
          <p class="vcard-number" id="vcard-number" aria-label="Number">0000 0000 0000 0000</p>
          <div class="flex">
            <p class="cardholder-name" id="vcard-holder" aria-label="Holder">JANE APPLESEED</p>
            <div class="card-date">
              <span class="month-iformation" id="vcard-mm" aria-label="Expiration (month)">00</span>/<span class="year-information" id="vcard-yy" aria-label="Expiration (year)">00</span>
            </div>
          </div>
        </div>
        <!--front-card-->
        <div class="back-card">
          <p class="card-cvc" id="vcard-cvc" aria-label="CVC">000</p>
        </div>
      </div>
    </section>
    <!--card-section-->

    <section class="right-content">
      <h2 class="headings-2">New virtual card</h2>
      <form class="card-inputs" id="addcard_form">
        <div class="cardholder-input-section">
          <p>COLLABORATOR</p>
          <select class="input" name="collaborator">
            <option>choose</option>
            <option value="1">Linus Torvalds</option>
            <option value="2">Tim Berners-Lee</option>
            <option value="3">Jane Appleseed</option>
            <option value="4">Ada Lovelace</option>
            <option value="5">Blaise Pascal</option>
            <option value="6">Dennis Ritchie</option>
            <option value="7">James Gosling</option>
            <option value="8">Marc Andreessen</option>
            <option value="9">Katherine Johnson</option>
            <option value="10">Mary Keller</option>
          </select>
          <p class="error-msg">can't be blank</p>
        </div>
        <!--cardholder-input-section-->

        <div class="cardholder-input-section">
          <p>AMOUNT (&euro;)</p>
          <input type="number" name="amount" class="input" min="1" step="1" max="99999">
          <p class="error-msg">can't be blank</p>
        </div>
        <!--cardholder-input-section-->

        <div class="cardholder-input-section">
          <p>CARDHOLDER NAME</p>
          <input type="text" name="cardholder" class="input cardholder-input" maxlength="20"
            placeholder="e.g. Jane Applessed">
          <p class="error-msg">can't be blank</p>
        </div><!--cardholder-input-section-->

        <div class="cardnumber-input-section">
          <p>CARD NUMBER</p>
          <input type="number" name="cardnumber" class="input cardnumber-input"
            placeholder="e.g. 1234 5678 9123 0000" min="1111111111111111" step="1" max="9999999999999999">
          <p class="error-msg">can't be blank or incomplete</p>
        </div><!--cardnumber-input-section-->

        <div class="flex">
          <div class="datecard-input-section">
            <p>EXP. DATE (MM/YY)</p>
              <div class="flex">
                <input type="number" name="month" min="1" step="1" max="12" class="input month-input" placeholder="MM" maxlength="2">
                <input type="number" name="year" min="24" step="1" max="34" class="input year-input"
                  placeholder="YY" maxlength="2">
              </div>
              <p class="error-msg">invalid date</p>
          </div><!--datecard-input-section-->

          <div class="cvc-input-section">
            <p>CVC</p>
            <input type="number" name="cvc" class="input cvc-input" placeholder="e.g. 123">
            <p class="error-msg">can't be blank</p>
          </div>

        </div><!--flex-->
        <input type="submit" value="Create" class="submit-button">
      </form><!--card-inputs-->
      <div class="thank-section hidden">
        <img src="./images/icon-complete.svg" alt="icon-complete">
        <h3>THANK YOU!</h3>
        <p>we've added your card details</p>
        <button>Continue</button>
      </div>
    </section>
  </main>
  <script src="scripts/app.js"></script>
</body>