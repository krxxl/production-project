import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '@/shared/lib/testing/renderWithRouter/renderWithRouter';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profileData: Profile = {
  first: 'test',
  lastname: 'test',
  age: 22,
  id: '1',
  avatar: 'test',
  username: 'test',
  city: 'tlt',
  currency: Currency.EUR,
  country: Country.RUSSIA,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      profileData,
      form: profileData,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};
describe('EditableProfileCard', () => {
  test('EditableProfileCard editing is work', async () => {
    renderWithRouter(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));
    expect(screen.getByTestId('EditableProfileCardHeader.Cancel')).toBeInTheDocument();
  });

  test('EditableProfileCard when click cancel data will reset', async () => {
    renderWithRouter(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test1');
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('test1');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Cancel'));
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('test');
  });

  test('EditableProfileCard check validation', async () => {
    renderWithRouter(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('EditableProfileCard save when everything ok', async () => {
    const mockPutRequest = jest.spyOn(api, 'put');
    renderWithRouter(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test1');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
