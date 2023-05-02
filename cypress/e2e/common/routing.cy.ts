import { selectByTestId } from '../../helpers/selectByTestId';

describe('template spec', () => {
  describe('auth', () => {
    it('passes', () => {
      cy.visit('/');
      cy.get('[data-testid=MainPage]').should('exist');
    });
    it('редирект на майн для не авторизованного', () => {
      cy.visit('/profile/1');
      cy.get('[data-testid=MainPage]').should('exist');
    });
    it('страница не найдена', () => {
      cy.visit('/profidsfsd');
      cy.get('[data-testid=NotFoundPage]').should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get('[data-testid=ProfilePage]').should('exist');
    });

    it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
