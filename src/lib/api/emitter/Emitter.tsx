/*
 *  Copyright (c) 2016-2018, Leftshift One
 *   __________________
 *  [2018] Leftshift One
 *  All Rights Reserved.
 *  NOTICE:  All information contained herein is, and remains
 *  the property of Leftshift One and its suppliers,
 *  if any.  The intellectual and technical concepts contained
 *   herein are proprietary to Leftshift One
 *   and its suppliers and may be covered by Patents,
 *   patents in process, and are protected by trade secret or copyright law.
 *   Dissemination of this information or reproduction of this material
 *   is strictly forbidden unless prior written permission is obtained
 *   from Leftshift One.
 */

export default class Emitter {

    /**
     *  Emits an event of the given type with the given data. All callbacks that are listening to the particular
     *  event type will be notified.
     *
     * @param eventType
     * @param args
     */
    public static emit(eventType: string, ...args: any[]) {
        Emitter.listeners(eventType).forEach((listener: (args: any[]) => void) => listener(args));
    }

    /**
     * Return an array of listeners that are currently registered for the given event type.
     *
     * @param eventType
     */
    public static listeners(eventType: string) {
        return Emitter.theListeners[eventType] || [];
    }

    /**
     * Removes all of the registered listeners. eventType is optional, if provided only listeners for that
     * event type are removed.
     *
     * @param eventType
     */
    public static removeAllListeners(eventType: string) {
        delete this.theListeners[eventType];
    }

    /**
     * Register a specific callback to be called on a particular event. A token is returned that can be used
     * to remove the listener.
     */
    public static addListener(eventType: string, listener: (...args: any[]) => void) {
        if (this.theListeners[eventType]) {
            this.theListeners[eventType].push(listener);
        } else {
            this.theListeners[eventType] = [listener];
        }

        const index = this.theListeners[eventType].findIndex(e => e === listener);
        return () => {
            if (index >= 0) {
                this.theListeners[eventType].splice(index, 1);
            }
        };
    }

    private static theListeners: { [key: string]: Array<(args: any[]) => void> } = {};

}
