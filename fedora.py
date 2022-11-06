import kivy
from kivymd.app import MDApp
from kivy.lang import Builder
from kivy.uix.widget import Widget
from kivy.core.window import Window
from kivymd.theming import ThemeManager

# Set app size
Window.size = (430, 580)
Builder.load_file("fedora.kv")


class Calculator(Widget):

    def button_pressed(self, button):
        initial_input = self.ids.inputed_number.text
        if initial_input == '0':
            self.ids.inputed_number.text = ''
            self.ids.inputed_number.text = f'{button}'
        else:
            self.ids.inputed_number.text = f'{initial_input}{button}'

    def operation_signs(self, sign):
        initial_input = self.ids.inputed_number.text
        end_of_input = initial_input[-1]
        new = sign
        if end_of_input == '+' or end_of_input == '÷' or end_of_input == '-' or end_of_input == 'x':
            pass
        else:
            final_output = f"{initial_input}{sign}"
            self.ids.inputed_number.text = final_output
            self.ids.reflection.text = self.ids.inputed_number.text

    def equals_to(self):
        try:
            initial_input = self.ids.inputed_number.text
            if "x" in initial_input:
                initial_input = initial_input.replace("x", '*')
            elif "÷" in initial_input:
                initial_input = initial_input.replace("÷", '/')

            answer = eval(initial_input)
            self.ids.inputed_number.text = str(answer)
            self.ids.reflection.text = f"{initial_input}="
        except ZeroDivisionError:
            self.ids.inputed_number.font_size = 30
            self.ids.inputed_number.text = "Cannot divide by zero"
        except ValueError:
            self.ids.inputed_number.text = "0"
        except SyntaxError:
            self.ids.inputed_number.text = "0"

    def clear(self):
        self.ids.inputed_number.text = '0'
        self.ids.reflection.text = ''
        self.ids.inputed_number.font_size = 50

    def delete_last_number(self):
        if self.ids.reflection.text != '':
            self.ids.reflection.text = ''
        else:
            initial_input = self.ids.inputed_number.text
            initial_input = initial_input[:-1]
            self.ids.inputed_number.text = initial_input


class CalculatorApp(MDApp):
    def build(self):
        theme_cls = ThemeManager()
        self.theme_cls.primary_palette = "Purple"
        self.theme_cls.theme_style = "Light"
        return Calculator()


if __name__ == '__main__':
    CalculatorApp().run()



