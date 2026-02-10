#include QMK_KEYBOARD_H

enum tap_dance_codes {
  DANCE_0,
  DANCE_1,
};

enum custom_keycodes {
  ST_MACRO_0 = SAFE_RANGE,
  ST_MACRO_1,
  ST_MACRO_2,
  ST_MACRO_3,
  NEXT_DIFF,
  PREV_DIFF,
  REV_CHANGE,
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  Tab  │   Q   │   W   │   E   │   R   │   T   │   │   Y   │   U   │   I
    // │   O   │   P   │ Delete│
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │Esc/GUI│ A/Shft│ S/L6  │  D/L4 │ F/L2  │G/Ctrl │   │ H/Ctrl│ J/L1  │
    // K/L3  │ L/L5  │;/Shift│   '   │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │ TG(7) │   Z   │   X   │   C   │   V   │   B   │   │   N   │   M   │   ,
    // │   .   │   /   │ TG(7) │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │Ent/GUI│ Bkspc │TO(D0) │   │TD(D1) │GUI(-) │
    //                         Space │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [0] = LAYOUT(KC_TAB, KC_Q, KC_W, KC_E, KC_R, KC_T, KC_Y, KC_U, KC_I, KC_O,
                 KC_P, KC_DELETE, MT(MOD_LGUI, KC_ESCAPE), MT(MOD_LSFT, KC_A),
                 LT(6, KC_S), LT(4, KC_D), LT(2, KC_F), MT(MOD_LCTL, KC_G),
                 MT(MOD_RCTL, KC_H), LT(1, KC_J), LT(3, KC_K), LT(5, KC_L),
                 MT(MOD_RSFT, KC_SCLN), KC_QUOTE, TG(7), KC_Z, KC_X, KC_C, KC_V,
                 KC_B, KC_N, KC_M, KC_COMMA, KC_DOT, KC_SLASH, TG(7),
                 MT(MOD_LGUI, KC_ENTER), KC_BSPC, TD(DANCE_0), TD(DANCE_1),
                 LGUI(KC_MINUS), KC_SPACE),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │   =>  │   +   │   *   │   ^   │   │  ---  │  ---  │   C
    // │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │   -   │   <   │   {   │   (   │   [   │   │  ---  │  ---  │
    // RCTRL │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │   >   │   }   │   )   │   ]   │   │  ---  │  ---  │   D
    // │  ---  │  ---  │  ---  │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [1] = LAYOUT(KC_TRNS, KC_TRNS, ST_MACRO_0, KC_PLUS, KC_ASTR, KC_CIRC,
                 KC_TRNS, KC_TRNS, KC_C, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_MINUS, KC_LABK, KC_LCBR, KC_LPRN, KC_LBRC, KC_TRNS, KC_TRNS,
                 KC_RIGHT_CTRL, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_RABK, KC_RCBR, KC_RPRN, KC_RBRC, KC_TRNS, KC_TRNS, KC_D,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │   #   │   ~   │   %
    // │  ---  │   \   │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │ LCTRL │  ---  │  ---  │   │   !   │   =   │   &
    // │   |   │   `   │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │   @   │   $   │   _
    // │   ->  │  ---  │  ---  │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [2] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_HASH,
                 KC_TILD, KC_PERC, KC_TRNS, KC_BSLS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_LEFT_CTRL, KC_TRNS, KC_TRNS, KC_EXLM, KC_EQUAL,
                 KC_AMPR, KC_PIPE, KC_GRAVE, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_AT, KC_DLR, KC_UNDS, ST_MACRO_1,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │   1   │   2   │   3   │   4   │   5   │   │  ---  │  RGUI │ ---
    // │ RCTRL │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │  ---  │   │  ---  │  ---  │
    //                         RSFT │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [3] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_1,
                 KC_2, LT(4, KC_3), KC_4, KC_5, KC_TRNS, KC_RIGHT_GUI, KC_TRNS,
                 KC_RIGHT_CTRL, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_RIGHT_SHIFT),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │ LCTRL │  ---  │ LGUI  │  ---  │   │   6   │   7   │   8
    // │   9   │   0   │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │ LSFT  │  ---  │  ---  │   |  ---  │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [4] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_RIGHT_CTRL, KC_TRNS, KC_LEFT_GUI, KC_TRNS, KC_6, KC_7,
                 LT(3, KC_8), KC_9, KC_0, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_LEFT_ALT, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_LEFT_SHIFT, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS),

    // UTIL_L
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │  ---  │   F4  │CT+SH+I|   │  ---  │  ---  │ ---
    // │  ---  │ CTRL  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │  ---  │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [5] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 LCTL(LSFT(KC_R)), KC_TAB, LSFT(KC_F6), KC_F4, LCTL(LSFT(KC_I)),
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_LEFT_CTRL, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS),

    // UTIL_R
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   | "+y   │ HOME  │ ---
    // │  ---  │  "+p  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  ---  │ LCTRL │  ---  │  ---  │   │  ---  │ LEFT  │
    // DOWN  │  UP   │ RIGHT │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │ TO(0) │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  END  │ ---
    // │  ---  │  ---  │ TO(0) │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │ TO(0) │   │ TO(0) │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [6] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 ST_MACRO_2, KC_HOME, KC_TRNS, KC_TRNS, ST_MACRO_3, KC_TRNS,
                 KC_TRNS, KC_TRNS, KC_TRNS, KC_LEFT_CTRL, KC_TRNS, KC_TRNS,
                 KC_LEFT, KC_DOWN, KC_UP, KC_RIGHT, KC_TRNS, KC_TRNS, TO(0),
                 KC_TRNS, LCTL(LALT(KC_R)), PREV_DIFF, NEXT_DIFF, KC_TRNS,
                 KC_TRNS, KC_END, KC_TRNS, KC_TRNS, KC_TRNS, TO(0), KC_TRNS,
                 KC_TRNS, TO(0), TO(0), KC_TRNS, KC_TRNS),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │
    // SCRL  │  ---  │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │  ---  │  MB2  │  MB3  │  MB1  │  ---  │   │  ---  │ MB1   │ MB3
    // │ MB2   │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │ TO(0) │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │  ---  │ ---
    // │  ---  │  ---  │ TO(0) │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │ TO(0) │   │ TO(0) │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    // [7] = LAYOUT(
    //   KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
    //   KC_SCRL, KC_TRNS, KC_TRNS, KC_TRNS,
    //   KC_TRNS, KC_TRNS, KC_MS_BTN2, KC_MS_BTN3, KC_MS_BTN1, KC_TRNS, KC_TRNS,
    //   KC_MS_BTN1, KC_MS_BTN3, KC_MS_BTN2, KC_TRNS, KC_TRNS,
    //   TO(0), KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
    //   KC_TRNS, KC_TRNS, KC_TRNS, TO(0),
    //   KC_TRNS, KC_TRNS,TO(0),                                         TO(0),
    //   KC_TRNS, KC_TRNS
    // ),
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // ╭───────┬───────┬───────┬───────┬───────┬───────╮
    // │  ---  │  ---  │  ---  │   +   │   *   │  ---  │   │  ---  │   /   │   -
    // │ ---   │  ---  │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │  ---  │   1   │   2   │   3   │   4   │   5   │   │   6   │   7   │   8
    // │   9   │   0   │  ---  │
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┼───────┼───────┤
    // │ TO(0) │  ---  │  ---  │  ---  │  ---  │  ---  │   │  ---  │   =   │ ---
    // │  ---  │  ---  │ TO(0) │
    // ╰───────┴───────┴───────┼───────┼───────┼───────┤
    // ├───────┼───────┼───────┼───────┴───────┴───────╯
    //                         │  ---  │  ---  │ TO(0) │   │ TO(0) │  ---  │ ---
    //                         │
    //                         ╰───────┴───────┴───────╯
    //                         ╰───────┴───────┴───────╯
    [8] = LAYOUT(KC_TRNS, KC_TRNS, KC_TRNS, KC_PLUS, KC_ASTR, KC_TRNS, KC_TRNS,
                 KC_SLASH, KC_MINUS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_1,
                 KC_2, KC_3, KC_4, KC_5, KC_6, KC_7, KC_8, KC_9, KC_0, KC_TRNS,
                 TO(0), KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                 KC_EQUAL, KC_TRNS, KC_TRNS, KC_TRNS, TO(0), KC_TRNS, KC_TRNS,
                 TO(0), TO(0), KC_TRNS, KC_TRNS),
};

bool process_record_user(uint16_t keycode, keyrecord_t *record) {
  switch (keycode) {
  case ST_MACRO_0:
    if (record->event.pressed) {
      SEND_STRING("=>");
    }
    break;
  case ST_MACRO_1:
    if (record->event.pressed) {
      SEND_STRING("->");
    }
    break;
  case ST_MACRO_2:
    if (record->event.pressed) {
      SEND_STRING("\"+y");
    }
    break;
  case ST_MACRO_3:
    if (record->event.pressed) {
      SEND_STRING("\"+p");
    }
    break;
  case PREV_DIFF:
    if (record->event.pressed) {
      SEND_STRING("[c");
    }
    break;
  case NEXT_DIFF:
    if (record->event.pressed) {
      SEND_STRING("]c");
    }
    break;
  }
  return true;
}

enum {
  TAP = 1,
  HOLD,
};

static uint8_t dance_state;

uint8_t get_dance_state(tap_dance_state_t *state);

uint8_t get_dance_state(tap_dance_state_t *state) {
  if (state->interrupted || !state->pressed)
    return TAP;
  return HOLD;
}

void tap_layer_hold_key_finished(tap_dance_state_t *state, int layer,
                                 int key_code);

void tap_layer_hold_key_finished(tap_dance_state_t *state, int layer,
                                 int key_code) {
  dance_state = get_dance_state(state);
  switch (dance_state) {
  case TAP:
    layer_move(layer);
    break;
  case HOLD:
    register_code16(key_code);
    break;
  }
}

void tap_layer_hold_key_reset(tap_dance_state_t *state, int key_code) {
  wait_ms(10);
  switch (dance_state) {
  case HOLD:
    unregister_code16(key_code);
    break;
  }
  dance_state = 0;
}

// todo rename to layer names and names for dance
void tap_8_hold_alt_finished(tap_dance_state_t *state, void *user_data);
void alt_hold_reset(tap_dance_state_t *state, void *user_data);

void tap_8_hold_alt_finished(tap_dance_state_t *state, void *user_data) {
  tap_layer_hold_key_finished(state, 8, KC_LEFT_ALT);
}

void alt_hold_reset(tap_dance_state_t *state, void *user_data) {
  tap_layer_hold_key_reset(state, KC_LEFT_ALT);
}

void tap_6_hold_alt_finished(tap_dance_state_t *state, void *user_data);

void tap_6_hold_alt_finished(tap_dance_state_t *state, void *user_data) {
  tap_layer_hold_key_finished(state, 6, KC_LEFT_ALT);
}

tap_dance_action_t tap_dance_actions[] = {
    [DANCE_0] = ACTION_TAP_DANCE_FN_ADVANCED(NULL, tap_8_hold_alt_finished,
                                             alt_hold_reset),
    [DANCE_1] = ACTION_TAP_DANCE_FN_ADVANCED(NULL, tap_6_hold_alt_finished,
                                             alt_hold_reset),
};
