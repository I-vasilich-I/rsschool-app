import React from 'react';
import { render } from '@testing-library/react';
import ContactsCard from '../ContactsCard';

describe('ContactsCard', () => {
  describe('Should render correctly', () => {
    it('if editing mode is disabled', () => {
      const wrapper = render(
        <ContactsCard
          data={{
            epamEmail: 'vasya@epam.com',
            phone: '1232422',
            email: 'vasya@tut.by',
            skype: 'skype_vasya',
            telegram: 'televasya',
            notes: 'vasya',
            linkedIn: 'http://linkedin_test.com/vasya',
          }}
          isEditingModeEnabled={false}
          onProfileSettingsChange={jest.fn()}
          sendConfirmationEmail={jest.fn()}
          connections={{}}
          isDataPendingSave={false}
        />,
      );
      expect(wrapper.container).toMatchSnapshot();
    });
    it('if editing mode is enabled', () => {
      const wrapper = render(
        <ContactsCard
          data={{
            epamEmail: 'vasya@epam.com',
            phone: '1232422',
            email: 'vasya@tut.by',
            skype: 'skype_vasya',
            telegram: null,
            notes: null,
            linkedIn: null,
          }}
          isEditingModeEnabled={true}
          onProfileSettingsChange={jest.fn()}
          sendConfirmationEmail={jest.fn()}
          connections={{}}
        />,
      );
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});
