import { useState } from 'react';
import { Sections } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedBack = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  return (
    <div>
      <GlobalStyle />
      <Section title={'Please leave feedback'}>
        <Sections>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedBack}
          />
        </Sections>
        <Sections>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </Section>
    </div>
  );
};
