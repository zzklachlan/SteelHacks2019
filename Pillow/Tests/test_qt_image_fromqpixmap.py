from .helper import PillowTestCase, hopper
from .test_imageqt import PillowQPixmapTestCase

from PIL import ImageQt


class TestFromQPixmap(PillowQPixmapTestCase, PillowTestCase):

    def roundtrip(self, expected):
        result = ImageQt.fromqpixmap(ImageQt.toqpixmap(expected))
        # Qt saves all pixmaps as rgb
        self.assert_image_equal(result, expected.convert('RGB'))

    def test_sanity_1(self):
        self.roundtrip(hopper('1'))

    def test_sanity_rgb(self):
        self.roundtrip(hopper('RGB'))

    def test_sanity_rgba(self):
        self.roundtrip(hopper('RGBA'))

    def test_sanity_l(self):
        self.roundtrip(hopper('L'))

    def test_sanity_p(self):
        self.roundtrip(hopper('P'))
