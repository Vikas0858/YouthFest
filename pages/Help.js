import React from "react";
import questions from "../components/help/faq.json";
import Banner from "../components/help/Banner";
import HelpPageTop from "../components/help/HelpPageTop";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
export default function Help() {
  return (
    <>
      <HelpPageTop />
      <Banner>
        <Banner.Header>
          In Doubt?
          <br />
          Find Your Answer Here.
        </Banner.Header>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
      </Banner>
      <FollowUs />
      <Footer />
    </>
  );
}
