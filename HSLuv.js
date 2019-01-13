autowatch = 1;
inlets = 1;
outlets = 1;

var HSLuv = require("libHSLuv");

function hsluvToRgb(color)
{
	post(arguments[0] + ", " + arguments[1] + ", " + arguments[2] + "\n");
	outlet(0, HSLuv.hsluvToRgb([arguments[0], arguments[1], arguments[2]]));
}

function rgbToHsluv(color)
{
	outlet(0, HSLuv.rgbToHsluv(arguments));
}

// HSLuv.hpluvToRgb= S;
// HSLuv.rgbToHpluv= T;
// HSLuv.hsluvToHex= function (a) { return L(Q(a)) };
// HSLuv.hexToHsluv= function (a) { return R(N(a)) };
// HSLuv.hpluvToHex= function (a) { return L(S(a)) };
// HSLuv.hexToHpluv= function (a) { return T(N(a)) };
// HSLuv.lchToHpluv= K;
// HSLuv.hpluvToLch= J;
// HSLuv.lchToHsluv= I;
// HSLuv.hsluvToLch= H;
// HSLuv.lchToLuv= G;
// HSLuv.luvToLch= F;
// HSLuv.xyzToLuv= A;
// HSLuv.luvToXyz= E;
// HSLuv.xyzToRgb= t;
// HSLuv.rgbToXyz= u;
// HSLuv.lchToRgb= O;
// HSLuv.rgbToLch= P;
