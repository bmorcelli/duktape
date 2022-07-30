function test() {
    // Encoded data from test-cbor-encode-3.js.
    var u8 = new Uint8Array([
        0x99, 0x04, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04,
        0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c,
        0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14,
        0x15, 0x16, 0x17, 0x18, 0x18, 0x18, 0x19, 0x18,
        0x1a, 0x18, 0x1b, 0x18, 0x1c, 0x18, 0x1d, 0x18,
        0x1e, 0x18, 0x1f, 0x18, 0x20, 0x18, 0x21, 0x18,
        0x22, 0x18, 0x23, 0x18, 0x24, 0x18, 0x25, 0x18,
        0x26, 0x18, 0x27, 0x18, 0x28, 0x18, 0x29, 0x18,
        0x2a, 0x18, 0x2b, 0x18, 0x2c, 0x18, 0x2d, 0x18,
        0x2e, 0x18, 0x2f, 0x18, 0x30, 0x18, 0x31, 0x18,
        0x32, 0x18, 0x33, 0x18, 0x34, 0x18, 0x35, 0x18,
        0x36, 0x18, 0x37, 0x18, 0x38, 0x18, 0x39, 0x18,
        0x3a, 0x18, 0x3b, 0x18, 0x3c, 0x18, 0x3d, 0x18,
        0x3e, 0x18, 0x3f, 0x18, 0x40, 0x18, 0x41, 0x18,
        0x42, 0x18, 0x43, 0x18, 0x44, 0x18, 0x45, 0x18,
        0x46, 0x18, 0x47, 0x18, 0x48, 0x18, 0x49, 0x18,
        0x4a, 0x18, 0x4b, 0x18, 0x4c, 0x18, 0x4d, 0x18,
        0x4e, 0x18, 0x4f, 0x18, 0x50, 0x18, 0x51, 0x18,
        0x52, 0x18, 0x53, 0x18, 0x54, 0x18, 0x55, 0x18,
        0x56, 0x18, 0x57, 0x18, 0x58, 0x18, 0x59, 0x18,
        0x5a, 0x18, 0x5b, 0x18, 0x5c, 0x18, 0x5d, 0x18,
        0x5e, 0x18, 0x5f, 0x18, 0x60, 0x18, 0x61, 0x18,
        0x62, 0x18, 0x63, 0x18, 0x64, 0x18, 0x65, 0x18,
        0x66, 0x18, 0x67, 0x18, 0x68, 0x18, 0x69, 0x18,
        0x6a, 0x18, 0x6b, 0x18, 0x6c, 0x18, 0x6d, 0x18,
        0x6e, 0x18, 0x6f, 0x18, 0x70, 0x18, 0x71, 0x18,
        0x72, 0x18, 0x73, 0x18, 0x74, 0x18, 0x75, 0x18,
        0x76, 0x18, 0x77, 0x18, 0x78, 0x18, 0x79, 0x18,
        0x7a, 0x18, 0x7b, 0x18, 0x7c, 0x18, 0x7d, 0x18,
        0x7e, 0x18, 0x7f, 0x18, 0x80, 0x18, 0x81, 0x18,
        0x82, 0x18, 0x83, 0x18, 0x84, 0x18, 0x85, 0x18,
        0x86, 0x18, 0x87, 0x18, 0x88, 0x18, 0x89, 0x18,
        0x8a, 0x18, 0x8b, 0x18, 0x8c, 0x18, 0x8d, 0x18,
        0x8e, 0x18, 0x8f, 0x18, 0x90, 0x18, 0x91, 0x18,
        0x92, 0x18, 0x93, 0x18, 0x94, 0x18, 0x95, 0x18,
        0x96, 0x18, 0x97, 0x18, 0x98, 0x18, 0x99, 0x18,
        0x9a, 0x18, 0x9b, 0x18, 0x9c, 0x18, 0x9d, 0x18,
        0x9e, 0x18, 0x9f, 0x18, 0xa0, 0x18, 0xa1, 0x18,
        0xa2, 0x18, 0xa3, 0x18, 0xa4, 0x18, 0xa5, 0x18,
        0xa6, 0x18, 0xa7, 0x18, 0xa8, 0x18, 0xa9, 0x18,
        0xaa, 0x18, 0xab, 0x18, 0xac, 0x18, 0xad, 0x18,
        0xae, 0x18, 0xaf, 0x18, 0xb0, 0x18, 0xb1, 0x18,
        0xb2, 0x18, 0xb3, 0x18, 0xb4, 0x18, 0xb5, 0x18,
        0xb6, 0x18, 0xb7, 0x18, 0xb8, 0x18, 0xb9, 0x18,
        0xba, 0x18, 0xbb, 0x18, 0xbc, 0x18, 0xbd, 0x18,
        0xbe, 0x18, 0xbf, 0x18, 0xc0, 0x18, 0xc1, 0x18,
        0xc2, 0x18, 0xc3, 0x18, 0xc4, 0x18, 0xc5, 0x18,
        0xc6, 0x18, 0xc7, 0x18, 0xc8, 0x18, 0xc9, 0x18,
        0xca, 0x18, 0xcb, 0x18, 0xcc, 0x18, 0xcd, 0x18,
        0xce, 0x18, 0xcf, 0x18, 0xd0, 0x18, 0xd1, 0x18,
        0xd2, 0x18, 0xd3, 0x18, 0xd4, 0x18, 0xd5, 0x18,
        0xd6, 0x18, 0xd7, 0x18, 0xd8, 0x18, 0xd9, 0x18,
        0xda, 0x18, 0xdb, 0x18, 0xdc, 0x18, 0xdd, 0x18,
        0xde, 0x18, 0xdf, 0x18, 0xe0, 0x18, 0xe1, 0x18,
        0xe2, 0x18, 0xe3, 0x18, 0xe4, 0x18, 0xe5, 0x18,
        0xe6, 0x18, 0xe7, 0x18, 0xe8, 0x18, 0xe9, 0x18,
        0xea, 0x18, 0xeb, 0x18, 0xec, 0x18, 0xed, 0x18,
        0xee, 0x18, 0xef, 0x18, 0xf0, 0x18, 0xf1, 0x18,
        0xf2, 0x18, 0xf3, 0x18, 0xf4, 0x18, 0xf5, 0x18,
        0xf6, 0x18, 0xf7, 0x18, 0xf8, 0x18, 0xf9, 0x18,
        0xfa, 0x18, 0xfb, 0x18, 0xfc, 0x18, 0xfd, 0x18,
        0xfe, 0x18, 0xff, 0x19, 0x01, 0x00, 0x19, 0x01,
        0x01, 0x19, 0x01, 0x02, 0x19, 0x01, 0x03, 0x19,
        0x01, 0x04, 0x19, 0x01, 0x05, 0x19, 0x01, 0x06,
        0x19, 0x01, 0x07, 0x19, 0x01, 0x08, 0x19, 0x01,
        0x09, 0x19, 0x01, 0x0a, 0x19, 0x01, 0x0b, 0x19,
        0x01, 0x0c, 0x19, 0x01, 0x0d, 0x19, 0x01, 0x0e,
        0x19, 0x01, 0x0f, 0x19, 0x01, 0x10, 0x19, 0x01,
        0x11, 0x19, 0x01, 0x12, 0x19, 0x01, 0x13, 0x19,
        0x01, 0x14, 0x19, 0x01, 0x15, 0x19, 0x01, 0x16,
        0x19, 0x01, 0x17, 0x19, 0x01, 0x18, 0x19, 0x01,
        0x19, 0x19, 0x01, 0x1a, 0x19, 0x01, 0x1b, 0x19,
        0x01, 0x1c, 0x19, 0x01, 0x1d, 0x19, 0x01, 0x1e,
        0x19, 0x01, 0x1f, 0x19, 0x01, 0x20, 0x19, 0x01,
        0x21, 0x19, 0x01, 0x22, 0x19, 0x01, 0x23, 0x19,
        0x01, 0x24, 0x19, 0x01, 0x25, 0x19, 0x01, 0x26,
        0x19, 0x01, 0x27, 0x19, 0x01, 0x28, 0x19, 0x01,
        0x29, 0x19, 0x01, 0x2a, 0x19, 0x01, 0x2b, 0x19,
        0x01, 0x2c, 0x19, 0x01, 0x2d, 0x19, 0x01, 0x2e,
        0x19, 0x01, 0x2f, 0x19, 0x01, 0x30, 0x19, 0x01,
        0x31, 0x19, 0x01, 0x32, 0x19, 0x01, 0x33, 0x19,
        0x01, 0x34, 0x19, 0x01, 0x35, 0x19, 0x01, 0x36,
        0x19, 0x01, 0x37, 0x19, 0x01, 0x38, 0x19, 0x01,
        0x39, 0x19, 0x01, 0x3a, 0x19, 0x01, 0x3b, 0x19,
        0x01, 0x3c, 0x19, 0x01, 0x3d, 0x19, 0x01, 0x3e,
        0x19, 0x01, 0x3f, 0x19, 0x01, 0x40, 0x19, 0x01,
        0x41, 0x19, 0x01, 0x42, 0x19, 0x01, 0x43, 0x19,
        0x01, 0x44, 0x19, 0x01, 0x45, 0x19, 0x01, 0x46,
        0x19, 0x01, 0x47, 0x19, 0x01, 0x48, 0x19, 0x01,
        0x49, 0x19, 0x01, 0x4a, 0x19, 0x01, 0x4b, 0x19,
        0x01, 0x4c, 0x19, 0x01, 0x4d, 0x19, 0x01, 0x4e,
        0x19, 0x01, 0x4f, 0x19, 0x01, 0x50, 0x19, 0x01,
        0x51, 0x19, 0x01, 0x52, 0x19, 0x01, 0x53, 0x19,
        0x01, 0x54, 0x19, 0x01, 0x55, 0x19, 0x01, 0x56,
        0x19, 0x01, 0x57, 0x19, 0x01, 0x58, 0x19, 0x01,
        0x59, 0x19, 0x01, 0x5a, 0x19, 0x01, 0x5b, 0x19,
        0x01, 0x5c, 0x19, 0x01, 0x5d, 0x19, 0x01, 0x5e,
        0x19, 0x01, 0x5f, 0x19, 0x01, 0x60, 0x19, 0x01,
        0x61, 0x19, 0x01, 0x62, 0x19, 0x01, 0x63, 0x19,
        0x01, 0x64, 0x19, 0x01, 0x65, 0x19, 0x01, 0x66,
        0x19, 0x01, 0x67, 0x19, 0x01, 0x68, 0x19, 0x01,
        0x69, 0x19, 0x01, 0x6a, 0x19, 0x01, 0x6b, 0x19,
        0x01, 0x6c, 0x19, 0x01, 0x6d, 0x19, 0x01, 0x6e,
        0x19, 0x01, 0x6f, 0x19, 0x01, 0x70, 0x19, 0x01,
        0x71, 0x19, 0x01, 0x72, 0x19, 0x01, 0x73, 0x19,
        0x01, 0x74, 0x19, 0x01, 0x75, 0x19, 0x01, 0x76,
        0x19, 0x01, 0x77, 0x19, 0x01, 0x78, 0x19, 0x01,
        0x79, 0x19, 0x01, 0x7a, 0x19, 0x01, 0x7b, 0x19,
        0x01, 0x7c, 0x19, 0x01, 0x7d, 0x19, 0x01, 0x7e,
        0x19, 0x01, 0x7f, 0x19, 0x01, 0x80, 0x19, 0x01,
        0x81, 0x19, 0x01, 0x82, 0x19, 0x01, 0x83, 0x19,
        0x01, 0x84, 0x19, 0x01, 0x85, 0x19, 0x01, 0x86,
        0x19, 0x01, 0x87, 0x19, 0x01, 0x88, 0x19, 0x01,
        0x89, 0x19, 0x01, 0x8a, 0x19, 0x01, 0x8b, 0x19,
        0x01, 0x8c, 0x19, 0x01, 0x8d, 0x19, 0x01, 0x8e,
        0x19, 0x01, 0x8f, 0x19, 0x01, 0x90, 0x19, 0x01,
        0x91, 0x19, 0x01, 0x92, 0x19, 0x01, 0x93, 0x19,
        0x01, 0x94, 0x19, 0x01, 0x95, 0x19, 0x01, 0x96,
        0x19, 0x01, 0x97, 0x19, 0x01, 0x98, 0x19, 0x01,
        0x99, 0x19, 0x01, 0x9a, 0x19, 0x01, 0x9b, 0x19,
        0x01, 0x9c, 0x19, 0x01, 0x9d, 0x19, 0x01, 0x9e,
        0x19, 0x01, 0x9f, 0x19, 0x01, 0xa0, 0x19, 0x01,
        0xa1, 0x19, 0x01, 0xa2, 0x19, 0x01, 0xa3, 0x19,
        0x01, 0xa4, 0x19, 0x01, 0xa5, 0x19, 0x01, 0xa6,
        0x19, 0x01, 0xa7, 0x19, 0x01, 0xa8, 0x19, 0x01,
        0xa9, 0x19, 0x01, 0xaa, 0x19, 0x01, 0xab, 0x19,
        0x01, 0xac, 0x19, 0x01, 0xad, 0x19, 0x01, 0xae,
        0x19, 0x01, 0xaf, 0x19, 0x01, 0xb0, 0x19, 0x01,
        0xb1, 0x19, 0x01, 0xb2, 0x19, 0x01, 0xb3, 0x19,
        0x01, 0xb4, 0x19, 0x01, 0xb5, 0x19, 0x01, 0xb6,
        0x19, 0x01, 0xb7, 0x19, 0x01, 0xb8, 0x19, 0x01,
        0xb9, 0x19, 0x01, 0xba, 0x19, 0x01, 0xbb, 0x19,
        0x01, 0xbc, 0x19, 0x01, 0xbd, 0x19, 0x01, 0xbe,
        0x19, 0x01, 0xbf, 0x19, 0x01, 0xc0, 0x19, 0x01,
        0xc1, 0x19, 0x01, 0xc2, 0x19, 0x01, 0xc3, 0x19,
        0x01, 0xc4, 0x19, 0x01, 0xc5, 0x19, 0x01, 0xc6,
        0x19, 0x01, 0xc7, 0x19, 0x01, 0xc8, 0x19, 0x01,
        0xc9, 0x19, 0x01, 0xca, 0x19, 0x01, 0xcb, 0x19,
        0x01, 0xcc, 0x19, 0x01, 0xcd, 0x19, 0x01, 0xce,
        0x19, 0x01, 0xcf, 0x19, 0x01, 0xd0, 0x19, 0x01,
        0xd1, 0x19, 0x01, 0xd2, 0x19, 0x01, 0xd3, 0x19,
        0x01, 0xd4, 0x19, 0x01, 0xd5, 0x19, 0x01, 0xd6,
        0x19, 0x01, 0xd7, 0x19, 0x01, 0xd8, 0x19, 0x01,
        0xd9, 0x19, 0x01, 0xda, 0x19, 0x01, 0xdb, 0x19,
        0x01, 0xdc, 0x19, 0x01, 0xdd, 0x19, 0x01, 0xde,
        0x19, 0x01, 0xdf, 0x19, 0x01, 0xe0, 0x19, 0x01,
        0xe1, 0x19, 0x01, 0xe2, 0x19, 0x01, 0xe3, 0x19,
        0x01, 0xe4, 0x19, 0x01, 0xe5, 0x19, 0x01, 0xe6,
        0x19, 0x01, 0xe7, 0x19, 0x01, 0xe8, 0x19, 0x01,
        0xe9, 0x19, 0x01, 0xea, 0x19, 0x01, 0xeb, 0x19,
        0x01, 0xec, 0x19, 0x01, 0xed, 0x19, 0x01, 0xee,
        0x19, 0x01, 0xef, 0x19, 0x01, 0xf0, 0x19, 0x01,
        0xf1, 0x19, 0x01, 0xf2, 0x19, 0x01, 0xf3, 0x19,
        0x01, 0xf4, 0x19, 0x01, 0xf5, 0x19, 0x01, 0xf6,
        0x19, 0x01, 0xf7, 0x19, 0x01, 0xf8, 0x19, 0x01,
        0xf9, 0x19, 0x01, 0xfa, 0x19, 0x01, 0xfb, 0x19,
        0x01, 0xfc, 0x19, 0x01, 0xfd, 0x19, 0x01, 0xfe,
        0x19, 0x01, 0xff, 0x19, 0x02, 0x00, 0x19, 0x02,
        0x01, 0x19, 0x02, 0x02, 0x19, 0x02, 0x03, 0x19,
        0x02, 0x04, 0x19, 0x02, 0x05, 0x19, 0x02, 0x06,
        0x19, 0x02, 0x07, 0x19, 0x02, 0x08, 0x19, 0x02,
        0x09, 0x19, 0x02, 0x0a, 0x19, 0x02, 0x0b, 0x19,
        0x02, 0x0c, 0x19, 0x02, 0x0d, 0x19, 0x02, 0x0e,
        0x19, 0x02, 0x0f, 0x19, 0x02, 0x10, 0x19, 0x02,
        0x11, 0x19, 0x02, 0x12, 0x19, 0x02, 0x13, 0x19,
        0x02, 0x14, 0x19, 0x02, 0x15, 0x19, 0x02, 0x16,
        0x19, 0x02, 0x17, 0x19, 0x02, 0x18, 0x19, 0x02,
        0x19, 0x19, 0x02, 0x1a, 0x19, 0x02, 0x1b, 0x19,
        0x02, 0x1c, 0x19, 0x02, 0x1d, 0x19, 0x02, 0x1e,
        0x19, 0x02, 0x1f, 0x19, 0x02, 0x20, 0x19, 0x02,
        0x21, 0x19, 0x02, 0x22, 0x19, 0x02, 0x23, 0x19,
        0x02, 0x24, 0x19, 0x02, 0x25, 0x19, 0x02, 0x26,
        0x19, 0x02, 0x27, 0x19, 0x02, 0x28, 0x19, 0x02,
        0x29, 0x19, 0x02, 0x2a, 0x19, 0x02, 0x2b, 0x19,
        0x02, 0x2c, 0x19, 0x02, 0x2d, 0x19, 0x02, 0x2e,
        0x19, 0x02, 0x2f, 0x19, 0x02, 0x30, 0x19, 0x02,
        0x31, 0x19, 0x02, 0x32, 0x19, 0x02, 0x33, 0x19,
        0x02, 0x34, 0x19, 0x02, 0x35, 0x19, 0x02, 0x36,
        0x19, 0x02, 0x37, 0x19, 0x02, 0x38, 0x19, 0x02,
        0x39, 0x19, 0x02, 0x3a, 0x19, 0x02, 0x3b, 0x19,
        0x02, 0x3c, 0x19, 0x02, 0x3d, 0x19, 0x02, 0x3e,
        0x19, 0x02, 0x3f, 0x19, 0x02, 0x40, 0x19, 0x02,
        0x41, 0x19, 0x02, 0x42, 0x19, 0x02, 0x43, 0x19,
        0x02, 0x44, 0x19, 0x02, 0x45, 0x19, 0x02, 0x46,
        0x19, 0x02, 0x47, 0x19, 0x02, 0x48, 0x19, 0x02,
        0x49, 0x19, 0x02, 0x4a, 0x19, 0x02, 0x4b, 0x19,
        0x02, 0x4c, 0x19, 0x02, 0x4d, 0x19, 0x02, 0x4e,
        0x19, 0x02, 0x4f, 0x19, 0x02, 0x50, 0x19, 0x02,
        0x51, 0x19, 0x02, 0x52, 0x19, 0x02, 0x53, 0x19,
        0x02, 0x54, 0x19, 0x02, 0x55, 0x19, 0x02, 0x56,
        0x19, 0x02, 0x57, 0x19, 0x02, 0x58, 0x19, 0x02,
        0x59, 0x19, 0x02, 0x5a, 0x19, 0x02, 0x5b, 0x19,
        0x02, 0x5c, 0x19, 0x02, 0x5d, 0x19, 0x02, 0x5e,
        0x19, 0x02, 0x5f, 0x19, 0x02, 0x60, 0x19, 0x02,
        0x61, 0x19, 0x02, 0x62, 0x19, 0x02, 0x63, 0x19,
        0x02, 0x64, 0x19, 0x02, 0x65, 0x19, 0x02, 0x66,
        0x19, 0x02, 0x67, 0x19, 0x02, 0x68, 0x19, 0x02,
        0x69, 0x19, 0x02, 0x6a, 0x19, 0x02, 0x6b, 0x19,
        0x02, 0x6c, 0x19, 0x02, 0x6d, 0x19, 0x02, 0x6e,
        0x19, 0x02, 0x6f, 0x19, 0x02, 0x70, 0x19, 0x02,
        0x71, 0x19, 0x02, 0x72, 0x19, 0x02, 0x73, 0x19,
        0x02, 0x74, 0x19, 0x02, 0x75, 0x19, 0x02, 0x76,
        0x19, 0x02, 0x77, 0x19, 0x02, 0x78, 0x19, 0x02,
        0x79, 0x19, 0x02, 0x7a, 0x19, 0x02, 0x7b, 0x19,
        0x02, 0x7c, 0x19, 0x02, 0x7d, 0x19, 0x02, 0x7e,
        0x19, 0x02, 0x7f, 0x19, 0x02, 0x80, 0x19, 0x02,
        0x81, 0x19, 0x02, 0x82, 0x19, 0x02, 0x83, 0x19,
        0x02, 0x84, 0x19, 0x02, 0x85, 0x19, 0x02, 0x86,
        0x19, 0x02, 0x87, 0x19, 0x02, 0x88, 0x19, 0x02,
        0x89, 0x19, 0x02, 0x8a, 0x19, 0x02, 0x8b, 0x19,
        0x02, 0x8c, 0x19, 0x02, 0x8d, 0x19, 0x02, 0x8e,
        0x19, 0x02, 0x8f, 0x19, 0x02, 0x90, 0x19, 0x02,
        0x91, 0x19, 0x02, 0x92, 0x19, 0x02, 0x93, 0x19,
        0x02, 0x94, 0x19, 0x02, 0x95, 0x19, 0x02, 0x96,
        0x19, 0x02, 0x97, 0x19, 0x02, 0x98, 0x19, 0x02,
        0x99, 0x19, 0x02, 0x9a, 0x19, 0x02, 0x9b, 0x19,
        0x02, 0x9c, 0x19, 0x02, 0x9d, 0x19, 0x02, 0x9e,
        0x19, 0x02, 0x9f, 0x19, 0x02, 0xa0, 0x19, 0x02,
        0xa1, 0x19, 0x02, 0xa2, 0x19, 0x02, 0xa3, 0x19,
        0x02, 0xa4, 0x19, 0x02, 0xa5, 0x19, 0x02, 0xa6,
        0x19, 0x02, 0xa7, 0x19, 0x02, 0xa8, 0x19, 0x02,
        0xa9, 0x19, 0x02, 0xaa, 0x19, 0x02, 0xab, 0x19,
        0x02, 0xac, 0x19, 0x02, 0xad, 0x19, 0x02, 0xae,
        0x19, 0x02, 0xaf, 0x19, 0x02, 0xb0, 0x19, 0x02,
        0xb1, 0x19, 0x02, 0xb2, 0x19, 0x02, 0xb3, 0x19,
        0x02, 0xb4, 0x19, 0x02, 0xb5, 0x19, 0x02, 0xb6,
        0x19, 0x02, 0xb7, 0x19, 0x02, 0xb8, 0x19, 0x02,
        0xb9, 0x19, 0x02, 0xba, 0x19, 0x02, 0xbb, 0x19,
        0x02, 0xbc, 0x19, 0x02, 0xbd, 0x19, 0x02, 0xbe,
        0x19, 0x02, 0xbf, 0x19, 0x02, 0xc0, 0x19, 0x02,
        0xc1, 0x19, 0x02, 0xc2, 0x19, 0x02, 0xc3, 0x19,
        0x02, 0xc4, 0x19, 0x02, 0xc5, 0x19, 0x02, 0xc6,
        0x19, 0x02, 0xc7, 0x19, 0x02, 0xc8, 0x19, 0x02,
        0xc9, 0x19, 0x02, 0xca, 0x19, 0x02, 0xcb, 0x19,
        0x02, 0xcc, 0x19, 0x02, 0xcd, 0x19, 0x02, 0xce,
        0x19, 0x02, 0xcf, 0x19, 0x02, 0xd0, 0x19, 0x02,
        0xd1, 0x19, 0x02, 0xd2, 0x19, 0x02, 0xd3, 0x19,
        0x02, 0xd4, 0x19, 0x02, 0xd5, 0x19, 0x02, 0xd6,
        0x19, 0x02, 0xd7, 0x19, 0x02, 0xd8, 0x19, 0x02,
        0xd9, 0x19, 0x02, 0xda, 0x19, 0x02, 0xdb, 0x19,
        0x02, 0xdc, 0x19, 0x02, 0xdd, 0x19, 0x02, 0xde,
        0x19, 0x02, 0xdf, 0x19, 0x02, 0xe0, 0x19, 0x02,
        0xe1, 0x19, 0x02, 0xe2, 0x19, 0x02, 0xe3, 0x19,
        0x02, 0xe4, 0x19, 0x02, 0xe5, 0x19, 0x02, 0xe6,
        0x19, 0x02, 0xe7, 0x19, 0x02, 0xe8, 0x19, 0x02,
        0xe9, 0x19, 0x02, 0xea, 0x19, 0x02, 0xeb, 0x19,
        0x02, 0xec, 0x19, 0x02, 0xed, 0x19, 0x02, 0xee,
        0x19, 0x02, 0xef, 0x19, 0x02, 0xf0, 0x19, 0x02,
        0xf1, 0x19, 0x02, 0xf2, 0x19, 0x02, 0xf3, 0x19,
        0x02, 0xf4, 0x19, 0x02, 0xf5, 0x19, 0x02, 0xf6,
        0x19, 0x02, 0xf7, 0x19, 0x02, 0xf8, 0x19, 0x02,
        0xf9, 0x19, 0x02, 0xfa, 0x19, 0x02, 0xfb, 0x19,
        0x02, 0xfc, 0x19, 0x02, 0xfd, 0x19, 0x02, 0xfe,
        0x19, 0x02, 0xff, 0x19, 0x03, 0x00, 0x19, 0x03,
        0x01, 0x19, 0x03, 0x02, 0x19, 0x03, 0x03, 0x19,
        0x03, 0x04, 0x19, 0x03, 0x05, 0x19, 0x03, 0x06,
        0x19, 0x03, 0x07, 0x19, 0x03, 0x08, 0x19, 0x03,
        0x09, 0x19, 0x03, 0x0a, 0x19, 0x03, 0x0b, 0x19,
        0x03, 0x0c, 0x19, 0x03, 0x0d, 0x19, 0x03, 0x0e,
        0x19, 0x03, 0x0f, 0x19, 0x03, 0x10, 0x19, 0x03,
        0x11, 0x19, 0x03, 0x12, 0x19, 0x03, 0x13, 0x19,
        0x03, 0x14, 0x19, 0x03, 0x15, 0x19, 0x03, 0x16,
        0x19, 0x03, 0x17, 0x19, 0x03, 0x18, 0x19, 0x03,
        0x19, 0x19, 0x03, 0x1a, 0x19, 0x03, 0x1b, 0x19,
        0x03, 0x1c, 0x19, 0x03, 0x1d, 0x19, 0x03, 0x1e,
        0x19, 0x03, 0x1f, 0x19, 0x03, 0x20, 0x19, 0x03,
        0x21, 0x19, 0x03, 0x22, 0x19, 0x03, 0x23, 0x19,
        0x03, 0x24, 0x19, 0x03, 0x25, 0x19, 0x03, 0x26,
        0x19, 0x03, 0x27, 0x19, 0x03, 0x28, 0x19, 0x03,
        0x29, 0x19, 0x03, 0x2a, 0x19, 0x03, 0x2b, 0x19,
        0x03, 0x2c, 0x19, 0x03, 0x2d, 0x19, 0x03, 0x2e,
        0x19, 0x03, 0x2f, 0x19, 0x03, 0x30, 0x19, 0x03,
        0x31, 0x19, 0x03, 0x32, 0x19, 0x03, 0x33, 0x19,
        0x03, 0x34, 0x19, 0x03, 0x35, 0x19, 0x03, 0x36,
        0x19, 0x03, 0x37, 0x19, 0x03, 0x38, 0x19, 0x03,
        0x39, 0x19, 0x03, 0x3a, 0x19, 0x03, 0x3b, 0x19,
        0x03, 0x3c, 0x19, 0x03, 0x3d, 0x19, 0x03, 0x3e,
        0x19, 0x03, 0x3f, 0x19, 0x03, 0x40, 0x19, 0x03,
        0x41, 0x19, 0x03, 0x42, 0x19, 0x03, 0x43, 0x19,
        0x03, 0x44, 0x19, 0x03, 0x45, 0x19, 0x03, 0x46,
        0x19, 0x03, 0x47, 0x19, 0x03, 0x48, 0x19, 0x03,
        0x49, 0x19, 0x03, 0x4a, 0x19, 0x03, 0x4b, 0x19,
        0x03, 0x4c, 0x19, 0x03, 0x4d, 0x19, 0x03, 0x4e,
        0x19, 0x03, 0x4f, 0x19, 0x03, 0x50, 0x19, 0x03,
        0x51, 0x19, 0x03, 0x52, 0x19, 0x03, 0x53, 0x19,
        0x03, 0x54, 0x19, 0x03, 0x55, 0x19, 0x03, 0x56,
        0x19, 0x03, 0x57, 0x19, 0x03, 0x58, 0x19, 0x03,
        0x59, 0x19, 0x03, 0x5a, 0x19, 0x03, 0x5b, 0x19,
        0x03, 0x5c, 0x19, 0x03, 0x5d, 0x19, 0x03, 0x5e,
        0x19, 0x03, 0x5f, 0x19, 0x03, 0x60, 0x19, 0x03,
        0x61, 0x19, 0x03, 0x62, 0x19, 0x03, 0x63, 0x19,
        0x03, 0x64, 0x19, 0x03, 0x65, 0x19, 0x03, 0x66,
        0x19, 0x03, 0x67, 0x19, 0x03, 0x68, 0x19, 0x03,
        0x69, 0x19, 0x03, 0x6a, 0x19, 0x03, 0x6b, 0x19,
        0x03, 0x6c, 0x19, 0x03, 0x6d, 0x19, 0x03, 0x6e,
        0x19, 0x03, 0x6f, 0x19, 0x03, 0x70, 0x19, 0x03,
        0x71, 0x19, 0x03, 0x72, 0x19, 0x03, 0x73, 0x19,
        0x03, 0x74, 0x19, 0x03, 0x75, 0x19, 0x03, 0x76,
        0x19, 0x03, 0x77, 0x19, 0x03, 0x78, 0x19, 0x03,
        0x79, 0x19, 0x03, 0x7a, 0x19, 0x03, 0x7b, 0x19,
        0x03, 0x7c, 0x19, 0x03, 0x7d, 0x19, 0x03, 0x7e,
        0x19, 0x03, 0x7f, 0x19, 0x03, 0x80, 0x19, 0x03,
        0x81, 0x19, 0x03, 0x82, 0x19, 0x03, 0x83, 0x19,
        0x03, 0x84, 0x19, 0x03, 0x85, 0x19, 0x03, 0x86,
        0x19, 0x03, 0x87, 0x19, 0x03, 0x88, 0x19, 0x03,
        0x89, 0x19, 0x03, 0x8a, 0x19, 0x03, 0x8b, 0x19,
        0x03, 0x8c, 0x19, 0x03, 0x8d, 0x19, 0x03, 0x8e,
        0x19, 0x03, 0x8f, 0x19, 0x03, 0x90, 0x19, 0x03,
        0x91, 0x19, 0x03, 0x92, 0x19, 0x03, 0x93, 0x19,
        0x03, 0x94, 0x19, 0x03, 0x95, 0x19, 0x03, 0x96,
        0x19, 0x03, 0x97, 0x19, 0x03, 0x98, 0x19, 0x03,
        0x99, 0x19, 0x03, 0x9a, 0x19, 0x03, 0x9b, 0x19,
        0x03, 0x9c, 0x19, 0x03, 0x9d, 0x19, 0x03, 0x9e,
        0x19, 0x03, 0x9f, 0x19, 0x03, 0xa0, 0x19, 0x03,
        0xa1, 0x19, 0x03, 0xa2, 0x19, 0x03, 0xa3, 0x19,
        0x03, 0xa4, 0x19, 0x03, 0xa5, 0x19, 0x03, 0xa6,
        0x19, 0x03, 0xa7, 0x19, 0x03, 0xa8, 0x19, 0x03,
        0xa9, 0x19, 0x03, 0xaa, 0x19, 0x03, 0xab, 0x19,
        0x03, 0xac, 0x19, 0x03, 0xad, 0x19, 0x03, 0xae,
        0x19, 0x03, 0xaf, 0x19, 0x03, 0xb0, 0x19, 0x03,
        0xb1, 0x19, 0x03, 0xb2, 0x19, 0x03, 0xb3, 0x19,
        0x03, 0xb4, 0x19, 0x03, 0xb5, 0x19, 0x03, 0xb6,
        0x19, 0x03, 0xb7, 0x19, 0x03, 0xb8, 0x19, 0x03,
        0xb9, 0x19, 0x03, 0xba, 0x19, 0x03, 0xbb, 0x19,
        0x03, 0xbc, 0x19, 0x03, 0xbd, 0x19, 0x03, 0xbe,
        0x19, 0x03, 0xbf, 0x19, 0x03, 0xc0, 0x19, 0x03,
        0xc1, 0x19, 0x03, 0xc2, 0x19, 0x03, 0xc3, 0x19,
        0x03, 0xc4, 0x19, 0x03, 0xc5, 0x19, 0x03, 0xc6,
        0x19, 0x03, 0xc7, 0x19, 0x03, 0xc8, 0x19, 0x03,
        0xc9, 0x19, 0x03, 0xca, 0x19, 0x03, 0xcb, 0x19,
        0x03, 0xcc, 0x19, 0x03, 0xcd, 0x19, 0x03, 0xce,
        0x19, 0x03, 0xcf, 0x19, 0x03, 0xd0, 0x19, 0x03,
        0xd1, 0x19, 0x03, 0xd2, 0x19, 0x03, 0xd3, 0x19,
        0x03, 0xd4, 0x19, 0x03, 0xd5, 0x19, 0x03, 0xd6,
        0x19, 0x03, 0xd7, 0x19, 0x03, 0xd8, 0x19, 0x03,
        0xd9, 0x19, 0x03, 0xda, 0x19, 0x03, 0xdb, 0x19,
        0x03, 0xdc, 0x19, 0x03, 0xdd, 0x19, 0x03, 0xde,
        0x19, 0x03, 0xdf, 0x19, 0x03, 0xe0, 0x19, 0x03,
        0xe1, 0x19, 0x03, 0xe2, 0x19, 0x03, 0xe3, 0x19,
        0x03, 0xe4, 0x19, 0x03, 0xe5, 0x19, 0x03, 0xe6,
        0x19, 0x03, 0xe7, 0x19, 0x03, 0xe8, 0x19, 0x03,
        0xe9, 0x19, 0x03, 0xea, 0x19, 0x03, 0xeb, 0x19,
        0x03, 0xec, 0x19, 0x03, 0xed, 0x19, 0x03, 0xee,
        0x19, 0x03, 0xef, 0x19, 0x03, 0xf0, 0x19, 0x03,
        0xf1, 0x19, 0x03, 0xf2, 0x19, 0x03, 0xf3, 0x19,
        0x03, 0xf4, 0x19, 0x03, 0xf5, 0x19, 0x03, 0xf6,
        0x19, 0x03, 0xf7, 0x19, 0x03, 0xf8, 0x19, 0x03,
        0xf9, 0x19, 0x03, 0xfa, 0x19, 0x03, 0xfb, 0x19,
        0x03, 0xfc, 0x19, 0x03, 0xfd, 0x19, 0x03, 0xfe,
        0x19, 0x03, 0xff ]);
    var buf = u8.buffer;

    for (var i = 0; i < 1e4; i++) {
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
        void CBOR.decode(buf);
    }
}

test();
