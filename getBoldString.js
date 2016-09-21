// �������� ������ ������� bold ��� ���
// ���������:
// cString - ������, ������ ������, ������� ���������� ������������� � ��������� bold
// ������������ ������ ��������������� � ����� bold, �������� "\t�\t�\t�\t�\t�\t�\t�"
function getBoldString(cString) {
  var cStringReturn = "";

  if (cString == "" || cString === undefined || typeof (cString) != "string") {
    cStringReturn = "";
  } else {
    for (var nPos = 0; nPos < cString.length; nPos++) {
      var cElement = cString.substr(nPos, 1);
      cStringReturn = cStringReturn + "\t" + cElement;
    }
  }
  return cStringReturn;
}