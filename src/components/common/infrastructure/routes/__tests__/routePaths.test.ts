import { routePaths, constructStudioHref } from '../routePaths';
import { StudiosType } from '../../../../studios/utilities/studiosUtility';

describe('routePaths', () => {
  it('should have all required route paths defined', () => {
    expect(routePaths.home).toBe('/');
    expect(routePaths.reformer).toBe('/reformer');
    expect(routePaths.prices).toBe('/prices');
    expect(routePaths.contacts).toBe('/contact-us');
    expect(routePaths.studios).toBe('/studios/:studio?');
    expect(routePaths.careers).toBe('/careers');
    expect(routePaths.privacyPolicy).toBe('/privacy-policy');
    expect(routePaths.termsOfUse).toBe('/terms-of-use');
  });
});

describe('constructStudioHref', () => {
  it('should construct correct href for sofia-center studio', () => {
    const studio: StudiosType = 'sofia-center';
    const result = constructStudioHref(studio);
    expect(result).toBe('/studios/sofia-center');
  });

  it('should construct correct href for varna-center studio', () => {
    const studio: StudiosType = 'varna-center';
    const result = constructStudioHref(studio);
    expect(result).toBe('/studios/varna-center');
  });

  it('should construct correct href for varna-levski studio', () => {
    const studio: StudiosType = 'varna-levski';
    const result = constructStudioHref(studio);
    expect(result).toBe('/studios/varna-levski');
  });

  it('should construct correct href for varna-troshevo studio', () => {
    const studio: StudiosType = 'varna-troshevo';
    const result = constructStudioHref(studio);
    expect(result).toBe('/studios/varna-troshevo');
  });
});
