<template>
  <div class="container">
    <h1>Latest Quotes
      <span><img src="../assets/getQuoteLogo.png" width="50px" /></span>
    </h1>
    
    <hr />
    <p class="error" v-if="error">{{error}}</p>

    <div class="postQuote">
      <input type="text" placeholder="Enter quote" v-model="inputQuote" />
      <input type="text" placeholder="Enter owner" v-model="inputOwner" />
      <button @click="PostQuote">Post Quote!</button>
    </div>

    <div class="quotes-container">
      <div
        class="quotes"
        v-for="(quote, index) in quotes"
        v-bind:item="quote"
        v-bind:index="index"
        v-bind:key="quote._id"
      >
        {{`${quote.createdAt.getDate()}/${quote.createdAt.getMonth()}/${quote.createdAt.getFullYear()}`}}
        <p class="text">{{quote.quote}}</p>
        <p class="owner">{{quote.owner}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteService from "../QuoteService";
export default {
  name: "QuoteComponent",
  data() {
    return {
      quotes: [],
      error: "",
      inputQuote: "",
      inputOwner: ""
    };
  },

  async created() {
    try {
      this.quotes = await QuoteService.getQuotes();
    } catch (err) {
      this.error = err.message;
    }
  },

  methods: {
    async PostQuote() {
      var quote = {
        quote: this.inputQuote,
        owner: this.inputOwner
      };
      this.inputQuote = "";
      this.inputOwner = "";
      try {
        await QuoteService.insertQuote(quote);
        this.quotes = await QuoteService.getQuotes();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style>
h1 {
  font-size: 5rem;
  color: #f5f6fa;
  margin: 3rem auto;
}

img{
  user-select: none;
}

hr{
  border: 3px solid #7bed9f;
  border-radius: 5px; 
}

.postQuote {
  margin: 0px auto;
  margin-top: 2rem;
}

div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #f5f6fa;
  padding: 10px;
  margin-bottom: 15px;
}

.quotes {
  position: relative;
  border: 1px solid #2f3640;
  background-color: #f1f2f6;
  padding: 10px 10px 30px 10px;
  width: 320px;
  height: 150px;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

*::selection {
  background: #7bed9f;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

p.owner {
  font-size: 16px;
  font-weight: 200;
  font-style: italic;
  text-align: right;
  margin-right: 0.5rem;
}

.quotes-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>