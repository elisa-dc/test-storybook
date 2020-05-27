module.exports = {
  name: 'my-first-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-first-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
