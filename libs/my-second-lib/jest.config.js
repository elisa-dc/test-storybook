module.exports = {
  name: 'my-second-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-second-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
