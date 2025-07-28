import {
  StudiosType,
  studioSofiaCenter,
  studioVarnaCenter,
  studioVarnaLevski,
  studioVarnaTroshevo,
} from '../studiosUtility';

describe('StudiosType', () => {
  it('should have correct studio types', () => {
    const validTypes: StudiosType[] = [
      'varna-center',
      'varna-levski',
      'sofia-center',
      'varna-troshevo',
    ];
    
    // This test ensures the type is correctly defined
    validTypes.forEach(type => {
      expect(typeof type).toBe('string');
    });
  });
});

describe('studioSofiaCenter', () => {
  it('should have correct studio information', () => {
    expect(studioSofiaCenter.studioName).toBe('София - център');
    expect(studioSofiaCenter.workingHours).toBe('Пон-Пет; 8:00-20:30');
    expect(studioSofiaCenter.address).toBe("ул. 'Георг Вашингтон' 29, София");
    expect(studioSofiaCenter.googleMapsLink).toBe('https://maps.app.goo.gl/76sjF14ttUPuk6CY6');
    expect(studioSofiaCenter.lat).toBe(42.7011482);
    expect(studioSofiaCenter.lng).toBe(23.3214208);
    expect(studioSofiaCenter.link).toBe('https://reservation.studio/bg/location/studio-reform-pilates/classes');
  });

  it('should have correct phone numbers', () => {
    expect(studioSofiaCenter.phoneNumbers).toHaveLength(1);
    expect(studioSofiaCenter.phoneNumbers[0].phone).toBe('+359 887 414 101');
    expect(studioSofiaCenter.phoneNumbers[0].phoneLink).toBe('tel:00359887414101');
  });

  it('should have meta description', () => {
    expect(studioSofiaCenter.metaDescription).toBe(
      'Реформър пилатес студио в центъра на София – модерно оборудване, уютна обстановка и сертифицирани треньори.'
    );
  });
});

describe('studioVarnaLevski', () => {
  it('should have correct studio information', () => {
    expect(studioVarnaLevski.studioName).toBe('Варна - Левски');
    expect(studioVarnaLevski.workingHours).toBe('Пон-Пет; 8:00-20:00');
    expect(studioVarnaLevski.address).toBe("Детски център 'Мама и аз', етаж 1, Варна");
    expect(studioVarnaLevski.googleMapsLink).toBe('https://maps.app.goo.gl/whkdPmhyXQ2G5u5N6');
    expect(studioVarnaLevski.lat).toBe(43.2205151);
    expect(studioVarnaLevski.lng).toBe(27.9334835);
    expect(studioVarnaLevski.link).toBeUndefined();
  });

  it('should have correct phone numbers', () => {
    expect(studioVarnaLevski.phoneNumbers).toHaveLength(2);
    expect(studioVarnaLevski.phoneNumbers[0].phone).toBe('+359 897 408 921');
    expect(studioVarnaLevski.phoneNumbers[0].phoneLink).toBe('tel:00359897408921');
    expect(studioVarnaLevski.phoneNumbers[1].phone).toBe('+359 889 953 740');
    expect(studioVarnaLevski.phoneNumbers[1].phoneLink).toBe('tel:00359889953740');
  });
});

describe('studioVarnaCenter', () => {
  it('should have correct studio information', () => {
    expect(studioVarnaCenter.studioName).toBe('Варна - Център');
    expect(studioVarnaCenter.workingHours).toBe('Пон-Пет; 8:00-20:00; Съб: 9:00-18:00');
    expect(studioVarnaCenter.address).toBe("ул. 'Александър Дякович' 45В, етаж 2, Варна");
    expect(studioVarnaCenter.googleMapsLink).toBe('https://maps.app.goo.gl/b9BuCJ5NQX6Ge5NP6');
    expect(studioVarnaCenter.lat).toBe(43.2029828);
    expect(studioVarnaCenter.lng).toBe(27.9033711);
  });

  it('should have correct phone numbers', () => {
    expect(studioVarnaCenter.phoneNumbers).toHaveLength(1);
    expect(studioVarnaCenter.phoneNumbers[0].phone).toBe('+359 889 953 740');
    expect(studioVarnaCenter.phoneNumbers[0].phoneLink).toBe('tel:00359889953740');
  });
});

describe('studioVarnaTroshevo', () => {
  it('should have correct studio information', () => {
    expect(studioVarnaTroshevo.studioName).toBe('Варна - Трошево');
    expect(studioVarnaTroshevo.workingHours).toBe('Пон-Пет; 8:00-20:00; Съб: 9:00-18:00');
    expect(studioVarnaTroshevo.address).toBe("Варна, ул.'Младежка' 141, ет.2, Варна");
    expect(studioVarnaTroshevo.googleMapsLink).toBe('https://maps.app.goo.gl/9eW69VpRbY3RQScBA');
    expect(studioVarnaTroshevo.lat).toBe(43.226035);
    expect(studioVarnaTroshevo.lng).toBe(27.87923);
  });

  it('should have correct phone numbers', () => {
    expect(studioVarnaTroshevo.phoneNumbers).toHaveLength(1);
    expect(studioVarnaTroshevo.phoneNumbers[0].phone).toBe('+359 889 953 740');
    expect(studioVarnaTroshevo.phoneNumbers[0].phoneLink).toBe('tel:00359889953740');
  });
});
